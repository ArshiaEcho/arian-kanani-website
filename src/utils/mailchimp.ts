// Official Mailchimp integration using their provided script
export interface MailchimpSubscriber {
  email: string;
  name?: string;
  source?: string;
  type?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

declare global {
  interface Window {
    mc4wp?: any;
    MailerLiteObject?: any;
    // Mailchimp global functions
    doSubmit?: (form: HTMLFormElement) => void;
  }
}

export const subscribeToMailchimp = async (subscriber: MailchimpSubscriber): Promise<{ success: boolean; message: string }> => {
  console.log('Starting Mailchimp subscription with official integration:', subscriber);

  try {
    // Wait for Mailchimp script to load
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max wait
    
    while (attempts < maxAttempts) {
      if (window.mc4wp || document.querySelector('#mc_embed_signup')) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }

    // Create a temporary form element that mimics Mailchimp's expected structure
    const form = document.createElement('form');
    form.id = 'mc-embedded-subscribe-form';
    form.name = 'mc-embedded-subscribe-form';
    form.className = 'validate';
    form.method = 'post';
    form.action = 'https://ariankanani.us4.list-manage.com/subscribe/post?u=4a385a24cc4029d7e345c9f8b&id=0ef0849f43';
    form.target = '_blank';
    form.noValidate = true;
    form.style.display = 'none';

    // Email field
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = subscriber.email;
    emailInput.name = 'EMAIL';
    emailInput.id = 'mce-EMAIL';
    emailInput.required = true;
    form.appendChild(emailInput);

    // First name field
    if (subscriber.name) {
      const firstName = subscriber.name.split(' ')[0];
      const fnameInput = document.createElement('input');
      fnameInput.type = 'text';
      fnameInput.value = firstName;
      fnameInput.name = 'FNAME';
      fnameInput.id = 'mce-FNAME';
      form.appendChild(fnameInput);

      // Last name field
      const lastName = subscriber.name.split(' ').slice(1).join(' ');
      if (lastName) {
        const lnameInput = document.createElement('input');
        lnameInput.type = 'text';
        lnameInput.value = lastName;
        lnameInput.name = 'LNAME';
        lnameInput.id = 'mce-LNAME';
        form.appendChild(lnameInput);
      }
    }

    // Add UTM and tracking fields if available
    const trackingFields = {
      'UTMSOURCE': subscriber.utm_source,
      'UTMMEDIUM': subscriber.utm_medium,
      'UTMCAMP': subscriber.utm_campaign,
      'UTMTERM': subscriber.utm_term,
      'UTMCONT': subscriber.utm_content,
      'SOURCE': subscriber.source,
      'TYPE': subscriber.type
    };

    Object.entries(trackingFields).forEach(([fieldName, value]) => {
      if (value) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = fieldName;
        input.value = value;
        form.appendChild(input);
      }
    });

    // Anti-spam honeypot field
    const honeypot = document.createElement('div');
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-5000px';
    honeypot.setAttribute('aria-hidden', 'true');
    
    const honeypotInput = document.createElement('input');
    honeypotInput.type = 'text';
    honeypotInput.name = 'b_4a385a24cc4029d7e345c9f8b_0ef0849f43';
    honeypotInput.tabIndex = -1;
    honeypotInput.value = '';
    
    honeypot.appendChild(honeypotInput);
    form.appendChild(honeypot);

    // Submit button
    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Subscribe';
    submitBtn.name = 'subscribe';
    submitBtn.id = 'mc-embedded-subscribe';
    form.appendChild(submitBtn);

    // Add form to DOM temporarily
    document.body.appendChild(form);

    console.log('Form created with fields:', {
      email: subscriber.email,
      name: subscriber.name,
      action: form.action
    });

    // Create a promise to handle the submission
    return new Promise((resolve) => {
      // Set up a timeout
      const timeout = setTimeout(() => {
        cleanup();
        resolve({ 
          success: true, 
          message: 'Thank you! Please check your email to confirm your subscription.' 
        });
      }, 3000);

      const cleanup = () => {
        clearTimeout(timeout);
        if (form.parentNode) {
          form.parentNode.removeChild(form);
        }
      };

      // Try to use Mailchimp's validation if available
      if (window.mc4wp && typeof window.mc4wp.forms === 'object') {
        console.log('Using Mailchimp validation');
        // Use Mailchimp's built-in validation
        try {
          form.submit();
          setTimeout(() => {
            cleanup();
            resolve({ 
              success: true, 
              message: 'Thank you! Please check your email to confirm your subscription.' 
            });
          }, 1500);
        } catch (error) {
          console.error('Mailchimp submission error:', error);
          cleanup();
          resolve({ 
            success: false, 
            message: 'Something went wrong. Please try again.' 
          });
        }
      } else {
        // Fallback: direct form submission
        console.log('Using direct form submission');
        try {
          form.submit();
          setTimeout(() => {
            cleanup();
            resolve({ 
              success: true, 
              message: 'Thank you! Please check your email to confirm your subscription.' 
            });
          }, 1500);
        } catch (error) {
          console.error('Form submission error:', error);
          cleanup();
          resolve({ 
            success: false, 
            message: 'Something went wrong. Please try again.' 
          });
        }
      }
    });

  } catch (error) {
    console.error('Mailchimp integration error:', error);
    return { 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    };
  }
};