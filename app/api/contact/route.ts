import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Check for API key
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        message: 'Error: RESEND_API_KEY is not set in environment variables',
      },
      { status: 500 }
    );
  }

  // Check for recipient email
  if (!process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      {
        message: 'Error: CONTACT_EMAIL is not set in environment variables',
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          message: 'Error: Missing required fields',
        },
        { status: 400 }
      );
    }

    // Function to get service name from key
    const getServiceName = (serviceKey: string): string => {
      const serviceNames: Record<string, { bg: string; en: string }> = {
        // Cleaning services
        basic: { bg: 'Основно почистване', en: 'Basic Cleaning' },
        postRenovation: { bg: 'Почистване след ремонт', en: 'Post-Renovation Cleaning' },
        furniture: { bg: 'Пране на мека мебел', en: 'Upholstery Cleaning' },
        carpet: { bg: 'Пране на мокет и килими', en: 'Carpet and Rug Cleaning' },
        windows: { bg: 'Почистване на прозорци и витрини', en: 'Window and Display Cleaning' },
        car: { bg: 'Мобилно почистване на автомобили', en: 'Mobile Car Cleaning' },
        subscription: { bg: 'Абонаментно почистване', en: 'Subscription Cleaning' },
        // Landscaping services
        design: { bg: 'Проектиране и ландшафтен дизайн', en: 'Design and Landscape Design' },
        maintenance: { bg: 'Поддръжка на градини и зелени площи', en: 'Garden and Green Space Maintenance' },
        creation: { bg: 'Създаване на зелени площи и озеленяване на дворове', en: 'Creating Green Spaces and Yard Landscaping' },
        pruning: { bg: 'Подрязване и оформяне на дървета и храсти', en: 'Tree and Shrub Pruning and Shaping' },
        turf: { bg: 'Полагане на тревни чимове', en: 'Turf Installation' },
      };

      // Default to Bulgarian, can be enhanced to detect language from request
      return serviceNames[serviceKey]?.bg || serviceNames[serviceKey]?.en || serviceKey;
    };

    const serviceName = service ? getServiceName(service) : null;

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #5682B1 0%, #739EC9 100%); padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Ново запитване от контактна форма</h1>
                    <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">Pure Space</p>
                  </td>
                </tr>
                <!-- Content -->
                <tr>
                  <td style="padding: 30px 20px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #5682B1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Име</strong>
                          <p style="margin: 4px 0 0 0; color: #333333; font-size: 16px;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #5682B1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Имейл</strong>
                          <p style="margin: 4px 0 0 0; color: #333333; font-size: 16px;">
                            <a href="mailto:${email}" style="color: #5682B1; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #5682B1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Телефон</strong>
                          <p style="margin: 4px 0 0 0; color: #333333; font-size: 16px;">
                            <a href="tel:${phone}" style="color: #5682B1; text-decoration: none;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                      ${serviceName ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #5682B1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Услуга</strong>
                          <p style="margin: 4px 0 0 0; color: #333333; font-size: 16px;">${serviceName}</p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 12px 0;">
                          <strong style="color: #5682B1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Съобщение</strong>
                          <div style="margin: 8px 0 0 0; padding: 16px; background-color: #f9f9f9; border-radius: 6px; border-left: 3px solid #5682B1;">
                            <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0; color: #666666; font-size: 12px;">Pure Space - Професионално почистване и озеленяване</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Pure Space <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: 'Ново запитване от контактна форма - Pure Space',
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          message: 'Error sending email',
          error: error instanceof Error ? error.message : JSON.stringify(error),
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      {
        message: 'Email sent successfully',
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      {
        message: 'Error',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// Задържаме GET за тестване
export async function GET() {
  return NextResponse.json({
    message: 'Use POST to send contact form data',
  });
}

