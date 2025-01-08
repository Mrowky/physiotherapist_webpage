var ckyConfig = {
    cookies: {
        necessary: [
            {
                name: "CookieYes Consent",
                description: "Stores user consent preferences for the website",
                cookies: [
                    {
                        name: "cky-consent",
                        domain: ".apmfizjoterapia.pl"
                    }
                ]
            }
        ],
        functional: [
            {
                name: "Website Functionality",
                description: "Cookies required for basic website functionality",
                cookies: [
                    {
                        name: "session",
                        domain: ".apmfizjoterapia.pl"
                    }
                ]
            }
        ],
        analytics: [
            {
                name: "Analytics Cookies",
                description: "Cookies used to analyze website traffic and user behavior",
                cookies: [
                    {
                        name: "_ga",
                        domain: ".apmfizjoterapia.pl"
                    },
                    {
                        name: "_gid",
                        domain: ".apmfizjoterapia.pl"
                    }
                ]
            }
        ],
        performance: [
            {
                name: "Performance Cookies",
                description: "Cookies used to enhance website performance",
                cookies: [
                    {
                        name: "_gat",
                        domain: ".apmfizjoterapia.pl"
                    }
                ]
            }
        ],
        advertisement: [
            {
                name: "Facebook",
                description: "Cookies set by Facebook for social media integration and tracking",
                cookies: [
                    {
                        name: "datr",
                        domain: ".facebook.com"
                    },
                    {
                        name: "sb",
                        domain: ".facebook.com"
                    },
                    {
                        name: "c_user",
                        domain: ".facebook.com"
                    },
                    {
                        name: "xs",
                        domain: ".facebook.com"
                    },
                    {
                        name: "fr",
                        domain: ".facebook.com"
                    },
                    {
                        name: "oo",
                        domain: ".facebook.com"
                    }
                ]
            }
        ]
    }
};

// Function to check if advertisement cookies are accepted
function checkSocialCookies() {
  if (typeof Cookieyes !== 'undefined') {
    // Get consent state for advertisement category
    const isAdvertisementAccepted = Cookieyes.getConsentState('advertisement');
    
    // Get all elements with data-cookieyes="advertisement"
    const advertisementElements = document.querySelectorAll('[data-cookieyes="advertisement"]');
    
    advertisementElements.forEach(element => {
      if (isAdvertisementAccepted) {
        // If advertisement cookies are accepted, show the element
        element.style.display = 'block';
      } else {
        // If advertisement cookies are not accepted, hide the element
        element.style.display = 'none';
      }
    });
  }
}

// Check cookie status when page loads
document.addEventListener('DOMContentLoaded', checkSocialCookies);

// Listen for CookieYes consent changes
document.addEventListener('cookieyes_consent_update', checkSocialCookies); 