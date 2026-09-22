export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await request.json();
    const {
      buyerName,
      buyerCompany,
      buyerEmail,
      buyerPhone,
      inquiryProduct,
      inquiryGrade,
      inquiryQuantity,
      inquiryPackaging,
      inquiryPort,
      buyerMessage,
    } = data;

    if (!buyerName || !buyerEmail || !buyerPhone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: Name, Email, or Phone." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailSubject = `Export Quotation Request: ${inquiryProduct} - ${buyerCompany || buyerName}`;
    const emailContent = `From: "Global View Exports Web Form" <enquiry@globalviewexports.com>
To: enquiry@globalviewexports.com
Reply-To: ${buyerEmail}
Subject: ${emailSubject}
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8

==================================================
NEW EXPORT INQUIRY - GLOBAL VIEW EXPORTS
==================================================

Buyer Name:           ${buyerName}
Company Name:         ${buyerCompany || "Not Specified"}
Email Address:        ${buyerEmail}
Phone / WhatsApp:     ${buyerPhone}

Product of Interest:  ${inquiryProduct}
EC Grade:             ${inquiryGrade}
Estimated Volume:     ${inquiryQuantity}
Packaging Required:   ${inquiryPackaging}
Destination Sea Port: ${inquiryPort || "Not Specified"}

Additional Specifications:
${buyerMessage || "Standard export quotation required"}

==================================================
`;

    // Send email via Cloudflare native SEND_EMAIL binding
    if (env && env.SEND_EMAIL) {
      try {
        const { EmailMessage } = await import("cloudflare:email");
        const msg = new EmailMessage(
          "enquiry@globalviewexports.com",
          "enquiry@globalviewexports.com",
          emailContent
        );
        await env.SEND_EMAIL.send(msg);
      } catch (emailErr) {
        console.error("Cloudflare email send error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your inquiry was sent directly to enquiry@globalviewexports.com via Cloudflare.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Failed to process inquiry" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
}
