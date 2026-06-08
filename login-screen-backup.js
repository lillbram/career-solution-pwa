// Backup of Login Screen Component for Career Solution PWA
// Salvaged on 2026-05-26 as per user request: "remove login page, we'll use it later"
// Updated with correct Figma design sizes on 2026-05-26.

function LoginScreen({ email, setEmail, password, setPassword, showPassword, setShowPassword, handleLogin, setIsLoggedIn }) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '402px',
      height: '874px',
      background: '#FFFFFF',
      zIndex: 10,
      overflow: 'hidden'
    }
  },
    // Status Bar (Frame 1290)
    React.createElement('div', {
      style: {
        position: 'absolute',
        width: '402px',
        height: '61px',
        left: '0px',
        top: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        gap: '10px',
        pointerEvents: 'none'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '362px',
          height: '19px'
        }
      },
        React.createElement('span', {
          style: {
            width: '31px',
            height: '19px',
            fontFamily: 'Sora',
            fontWeight: '700',
            fontSize: '15.8px',
            lineHeight: '19px',
            color: '#0C4D34'
          }
        }, '9:41'),
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '7px',
            width: '76.2px',
            height: '13px'
          }
        },
          // Signal Strength Group
          React.createElement('div', {
            style: {
              width: '18px',
              height: '13px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              gap: '2px',
              opacity: 0.9
            }
          },
            React.createElement('div', { style: { width: '3px', height: '9px', background: '#0C4D34', borderRadius: '0.5px' } }),
            React.createElement('div', { style: { width: '3px', height: '11px', background: '#0C4D34', borderRadius: '0.5px' } }),
            React.createElement('div', { style: { width: '3px', height: '13px', background: '#0C4D34', borderRadius: '0.5px' } }),
            React.createElement('div', { style: { width: '3px', height: '13px', background: '#0C4D34', opacity: 0.3, borderRadius: '0.5px' } })
          ),
          // Wi-Fi Group
          React.createElement('div', {
            style: {
              width: '15.2px',
              height: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.9
            }
          },
            React.createElement('svg', {
              width: '16',
              height: '13',
              viewBox: '0 0 16 13',
              fill: 'none'
            },
              React.createElement('path', {
                d: 'M8 12.5C8.82843 12.5 9.5 11.8284 9.5 11C9.5 10.1716 8.82843 9.5 8 9.5C7.17157 9.5 6.5 10.1716 6.5 11C6.5 11.8284 7.17157 12.5 8 12.5Z',
                fill: '#0C4D34'
              }),
              React.createElement('path', {
                d: 'M4.5 7.5C6.433 5.567 9.567 5.567 11.5 7.5',
                stroke: '#0C4D34',
                strokeWidth: '1.5',
                strokeLinecap: 'round'
              }),
              React.createElement('path', {
                d: 'M1.5 4.5C5.08985 0.910149 10.9101 0.910149 14.5 4.5',
                stroke: '#0C4D34',
                strokeWidth: '1.5',
                strokeLinecap: 'round'
              })
            )
          ),
          // Battery Group
          React.createElement('div', {
            style: {
              width: '29px',
              height: '13px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }
          },
            React.createElement('div', {
              style: {
                width: '22px',
                height: '13px',
                border: '1.5px solid #0C4D34',
                borderRadius: '3px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '1px'
              }
            },
              React.createElement('div', {
                style: {
                  width: '14px',
                  height: '7px',
                  background: '#0C4D34',
                  borderRadius: '1px'
                }
              })
            ),
            React.createElement('div', {
              style: {
                position: 'absolute',
                left: '23px',
                top: '4.5px',
                width: '1.5px',
                height: '4px',
                background: '#0C4D34',
                opacity: 0.4,
                borderTopRightRadius: '1px',
                borderBottomRightRadius: '1px'
              }
            })
          )
        )
      )
    ),

    // Logo Header (Frame 1000004967)
    React.createElement('div', {
      style: {
        position: 'absolute',
        width: '183px',
        height: '103px',
        left: '110px',
        top: '77px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '7px'
      }
    },
      React.createElement('div', {
        style: {
          width: '47px',
          height: '49px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
        React.createElement('svg', {
          width: '47',
          height: '49',
          viewBox: '0 0 47 49',
          fill: 'none'
        },
          React.createElement('rect', { width: '47', height: '49', rx: '12', fill: '#1E9E6B' }),
          React.createElement('path', {
            d: 'M23.5 35C23.5 35 15 28 15 20C15 15.5 18.5 13 22 13C23.5 13 23.5 15 23.5 16C23.5 15 23.5 13 25 13C28.5 13 32 15.5 32 20C32 28 23.5 35 23.5 35Z',
            fill: 'white'
          }),
          React.createElement('path', {
            d: 'M23.5 16V35',
            stroke: '#1E9E6B',
            strokeWidth: '2',
            strokeLinecap: 'round'
          })
        )
      ),
      React.createElement('div', {
        style: {
          width: '183px',
          height: '29px',
          fontFamily: 'Inter',
          fontWeight: '700',
          fontSize: '25.2px',
          lineHeight: '29px',
          color: '#0C4D34',
          textAlign: 'center'
        }
      }, 'Career Solution'),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          width: '97px',
          height: '11px'
        }
      },
        React.createElement('span', {
          style: {
            width: '42px',
            height: '9px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '8.4px',
            lineHeight: '9px',
            textAlign: 'center',
            color: '#101828',
            opacity: 0.8
          }
        }, 'Powered by'),
        React.createElement('div', {
          style: {
            width: '48px',
            height: '11px',
            display: 'flex',
            alignItems: 'center'
          }
        },
          React.createElement('svg', {
            width: '48',
            height: '11',
            viewBox: '0 0 48 11',
            fill: 'none'
          },
            React.createElement('text', {
              x: '0',
              y: '9',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '800',
              fontSize: '8.4',
              fill: '#1E9E6B'
            }, 'LM'),
            React.createElement('text', {
              x: '14',
              y: '9',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500',
              fontSize: '8.4',
              fill: '#101828'
            }, 'Career')
          )
        )
      )
    ),

    // Login Title Text
    React.createElement('div', {
      style: {
        position: 'absolute',
        width: '100px',
        height: '22px',
        left: '37px',
        top: '222px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '18.9px',
        lineHeight: '22px',
        color: '#0C4D34'
      }
    }, 'Login'),

    // Form Frame 1453
    React.createElement('form', {
      onSubmit: handleLogin,
      style: {
        position: 'absolute',
        width: '402px',
        height: '262px',
        left: '-1px',
        top: '261px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        gap: '18px'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '0px',
          gap: '16px',
          width: '314px',
          height: '172px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '18px',
            width: '314px',
            height: '144px'
          }
        },
          // Email Address (Frame 1449)
          React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '8px',
              width: '314px',
              height: '63px'
            }
          },
            React.createElement('label', {
              style: {
                width: '314px',
                height: '13px',
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '10.5px',
                lineHeight: '12px',
                color: '#137A52',
                cursor: 'pointer'
              }
            }, 'Email Address'),
            React.createElement('div', {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px 10px',
                gap: '10px',
                width: '314px',
                height: '42px',
                background: '#F3FBF7',
                borderRadius: '10px'
              }
            },
              React.createElement('input', {
                type: 'email',
                required: true,
                placeholder: 'Type your email address',
                value: email,
                onChange: (e) => setEmail(e.target.value),
                style: {
                  width: '100%',
                  height: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '10.5px',
                  color: '#0C4D34'
                }
              })
            )
          ),
          // Password (Frame 1450)
          React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '8px',
              width: '314px',
              height: '63px'
            }
          },
            React.createElement('label', {
              style: {
                width: '314px',
                height: '13px',
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '10.5px',
                lineHeight: '12px',
                color: '#137A52',
                cursor: 'pointer'
              }
            }, 'Password'),
            React.createElement('div', {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px 10px',
                gap: '10px',
                width: '314px',
                height: '42px',
                background: '#F3FBF7',
                borderRadius: '10px'
              }
            },
              React.createElement('input', {
                type: showPassword ? 'text' : 'password',
                required: true,
                placeholder: 'Type your password',
                value: password,
                onChange: (e) => setPassword(e.target.value),
                style: {
                  flex: 1,
                  height: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '10.5px',
                  color: '#0C4D34'
                }
              }),
              React.createElement('button', {
                type: 'button',
                onClick: () => setShowPassword(!showPassword),
                style: {
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14.7px',
                  color: '#7BA898',
                  padding: '0 5px'
                }
              }, showPassword ? '👁️' : '👁️‍🗨️')
            )
          )
        ),
        React.createElement('a', {
          href: '#',
          onClick: (e) => e.preventDefault(),
          style: {
            width: '314px',
            height: '12px',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: '10.5px',
            lineHeight: '12px',
            textAlign: 'right',
            color: '#137A52',
            textDecoration: 'none',
            cursor: 'pointer'
          }
        }, 'Forget Password?')
      ),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          gap: '10px',
          width: '402px',
          height: '72px'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '21px',
            width: '382px',
            height: '52px'
          }
        },
          React.createElement('button', {
            type: 'submit',
            style: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              gap: '10px',
              width: '308px',
              height: '52px',
              background: '#1E9E6B',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter',
              fontWeight: '700',
              fontSize: '15.8px',
              lineHeight: '18px',
              textAlign: 'center',
              color: '#FFFFFF'
            }
          }, 'Login')
        )
      )
    )),

    React.createElement('div', {
      style: {
        position: 'absolute',
        width: '170px',
        height: '12px',
        left: '116px',
        top: '553px',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '10.5px',
        lineHeight: '12px',
        textAlign: 'center',
        color: '#137A52'
      }
    }, 'Or Login with'),

    React.createElement('div', {
      style: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        gap: '27px',
        width: '267px',
        height: '44px',
        left: 'calc(50% - 267px/2 - 0.5px)',
        top: '587px'
      }
    },
      // Google Social
      React.createElement('button', {
        type: 'button',
        onClick: () => {
          setEmail('google@careersolution.com');
          setPassword('googlepass');
          setIsLoggedIn(true);
        },
        style: {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '10px',
          gap: '10px',
          width: '120px',
          height: '44px',
          border: '0.25px solid #1E9E6B',
          borderRadius: '10px',
          background: 'none',
          cursor: 'pointer'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '10px',
            width: '100px',
            height: '24px'
          }
        },
          React.createElement('svg', { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none' },
            React.createElement('path', { d: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z', fill: '#4285F4' }),
            React.createElement('path', { d: 'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z', fill: '#34A853' }),
            React.createElement('path', { d: 'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.86-4.53-5.84-4.53z', fill: '#FBBC05' }),
            React.createElement('path', { d: 'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z', fill: '#EB4335' })
          ),
          React.createElement('span', {
            style: {
              fontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '14.7px',
              lineHeight: '17px',
              color: '#000000',
              textAlign: 'center'
            }
          }, 'Google')
        )
      ),
      // Apple Social
      React.createElement('button', {
        type: 'button',
        onClick: () => {
          setEmail('apple@careersolution.com');
          setPassword('applepass');
          setIsLoggedIn(true);
        },
        style: {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '10px',
          gap: '10px',
          width: '120px',
          height: '44px',
          border: '0.25px solid #1E9E6B',
          borderRadius: '10px',
          background: 'none',
          cursor: 'pointer'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '10px',
            width: '100px',
            height: '24px'
          }
        },
          React.createElement('svg', { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none' },
            React.createElement('path', { d: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.17.67-2.88 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.24-.58 2.9-1.39', fill: '#000000' })
          ),
          React.createElement('span', {
            style: {
              fontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '14.7px',
              lineHeight: '17px',
              color: '#000000',
              textAlign: 'center'
            }
          }, 'Apple')
        )
      )
    ),

    React.createElement('div', {
      style: {
        position: 'absolute',
        left: '24.13%',
        right: '23.88%',
        top: '75.63%',
        bottom: '22.65%',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '12.6px',
        lineHeight: '15px',
        textAlign: 'center',
        color: '#7BA898'
      }
    },
      'Don\'t have an account? ',
      React.createElement('a', {
        href: '#',
        onClick: (e) => e.preventDefault(),
        style: {
          color: '#1E9E6B',
          textDecoration: 'none',
          fontWeight: '600'
        }
      }, 'Register free')
    ),

    // iOS Bottom Indicator
    React.createElement('div', {
      style: {
        position: 'absolute',
        bottom: '9px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '134px',
        height: '5px',
        background: '#000000',
        borderRadius: '2.5px',
        opacity: 0.8
      }
    })
  );
}
