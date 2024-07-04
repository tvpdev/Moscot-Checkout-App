export async function getProfileId(graphql) {
    const response = await graphql(
      `
        query checkoutProfiles {
          checkoutProfiles(first: 10) {
            edges {
              node {
                id
                isPublished
                name
              }
            }
          }
        }
      `
    );
  
    return response.json();
  }
  
  export async function inputFieldFocus(graphql, id) {
    const response = await graphql(
      `
        mutation ChangeGlobalColors(
          $checkoutBrandingInput: CheckoutBrandingInput!
          $checkoutProfileId: ID!
        ) {
          checkoutBrandingUpsert(
            checkoutBrandingInput: $checkoutBrandingInput
            checkoutProfileId: $checkoutProfileId
          ) {
            checkoutBranding {
              designSystem {
                colors {
                  global {
                    accent
                    decorative
                    info
                    critical
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,{
        variables: {
            "checkoutProfileId": id,
            "checkoutBrandingInput": {
              "designSystem": {
                "colors": {
                  "global": {
                    "accent": "#000000",
                    "decorative": "#54534D",
                    "info": "#545454",
                    "critical": "#B60005"
                  }
                }
              }
            }
        }
      }
    );
  
    return response.json();
    
  }
  
  export async function colorScheme(graphql, id) {
    const response = await graphql(
      `mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
        checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
          checkoutBranding {
           designSystem {
            colors {
              schemes {
                scheme1 {
                  base {
                    background
                    text
                    border
                  }
                  control {
                    background
                    border
                  }
                  primaryButton {
                    hover {
                      background
                    }
                  }
                }
                scheme2 {
                  base {
                    border
                    text
                  }
                  primaryButton{
                    background
                    text
                  }
                  control {
                    border
                    icon
                  }
                }
              }
            }
           }
          }
          userErrors {
            field
            message
          }
        }
      }        
      `,{
        variables: {
          "checkoutProfileId": id,
          "checkoutBrandingInput": {
            "designSystem": {
              "colors": {
                "schemes": {
                  "scheme1": {
                    "base": {
                      "background": "#FFFFFF",
                      "text": "#000000",
                      "border": "#000000"
                    },
                    "control": {
                      "background": "#FFFFFF",
                      "border": "#000000",
                    },
                    "primaryButton": {
                      "hover": {
                        "background": "#CFA600",
                        "text": "#140D01"
                      }
                    }
                  },
                  "scheme2": {
                    "base": {
                      "border": "#565656",
                      "text": "#000000"
                    },
                    "primaryButton": {
                      "background": "#FFCD03"
                    },
                    "control": {
                        "border": "#565656",
                        "icon": "#000000"
                    }
                  }
                }
              }
            }
          }
        }      
      }
    );
    return response.json();
  }
  
  
  export async function setComponentHeight(graphql, id) {
    const response = await graphql(
    `mutation checkoutBrandingUpsert($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
      checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
        checkoutBranding {
          designSystem {
            typography {
              size {
                base
                ratio
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
    
    `,{
      variables: {
        "checkoutProfileId": id,
        "checkoutBrandingInput": {
          "designSystem": {
            "typography": {
              "size": {
                "base": 14.0,
                "ratio": 1.4
              }
            }
          }
        }
      }
      
      }    
    
    );
  
    return response.json();
  }
  
  export async function changeOrderSummaryScheme(graphql, id) {
    const response = await graphql(
      `mutation ChangeOrderSummaryScheme($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
        checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
          checkoutBranding {
            customizations {
              headingLevel1{
                typography{
                  weight
                  size 
                }
              }
              orderSummary {
                colorScheme
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
      `,{
        variables: {
          "checkoutProfileId": id,
          "checkoutBrandingInput": {
            "customizations": {
              "headingLevel2": {
                "typography": {
                  "weight": "BASE",
                  "size": "MEDIUM"
                }
              },
              "orderSummary": {
                "colorScheme": "COLOR_SCHEME2"
              }
            }
          }
        } 
      }
    );
    return response.json();
  }

  // export async function deliveryCustomizationFunc(graphql) {
  //   const response = await graphql(
  //     `mutation {
  //       deliveryCustomizationCreate(deliveryCustomization: {
  //         functionId: "df85217d-536b-450f-9b4c-d6bbb0ea509a"
  //         title: "Hide shipping options based on attributes."
  //         enabled: true
  //       }) {
  //         deliveryCustomization {
  //           id
  //         }
  //         userErrors {
  //           message
  //         }
  //       }
  //     }      
  //     `
  //   );
  //   return response.json();
  // }