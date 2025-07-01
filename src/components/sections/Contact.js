import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';
import Badge from '../ui/Badge';
import Layout from '../Layout';
import BlurEffect from '../ui/BlurEffect';
import FAQ from './FAQ';
import JoinUsSection from './JoinUsSection';
import BackToTop from '../ui/BackToTop';

// Custom redesigned badge component to replace the imported Badge
const ModernBadge = ({ text, type = "primary" }) => {
  const bgColor = type === "primary" ? "bg-[#0066FF]/10" : "bg-emerald-500/10";
  const textColor = type === "primary" ? "text-[#0066FF]" : "text-emerald-400";
  const borderColor = type === "primary" ? "border-[#0066FF]/20" : "border-emerald-500/20";
  
  return (
    <motion.div 
      className={`inline-flex items-center px-3 py-1 rounded-full ${bgColor} ${textColor} border ${borderColor} text-xs font-medium`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: type === "primary" 
          ? "0 0 8px rgba(0, 102, 255, 0.3)" 
          : "0 0 8px rgba(16, 185, 129, 0.3)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span 
        className={`w-1.5 h-1.5 rounded-full ${type === "primary" ? "bg-[#0066FF]" : "bg-emerald-400"} mr-1.5`}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      {text}
    </motion.div>
  );
};

// Loading Spinner component
const LoadingSpinner = () => (
  <div className="inline-flex items-center">
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    <span>Submitting...</span>
    </div>
  );

const Contact = () => {
  // Add state to track focused form fields
  const [focusedField, setFocusedField] = useState(null);
  
  // Add form validation state
  const [formState, setFormState] = useState({
    firstName: { value: '', touched: false, isValid: false, error: '' },
    lastName: { value: '', touched: false, isValid: false, error: '' },
    email: { value: '', touched: false, isValid: false, error: '' },
    country: { value: '', touched: false, isValid: false, error: '' },
    companyType: { value: '', touched: false, isValid: false, error: '' },
    message: { value: '', touched: false, isValid: false, error: '' },
  });
  
  // Add form validation status
  const [formIsValid, setFormIsValid] = useState(false);
  
  // Add form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Add state for hover effects on contact cards
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Validate form field
  const validateField = (name, value) => {
    let isValid = false;
    let error = '';
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        isValid = value.trim().length >= 2;
        error = isValid ? '' : 'Must be at least 2 characters';
        break;
      case 'email':
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        error = isValid ? '' : 'Please enter a valid email address';
        break;
      case 'country':
      case 'companyType':
        isValid = value !== '';
        error = isValid ? '' : 'Please make a selection';
        break;
      case 'message':
        isValid = value.trim().length >= 10;
        error = isValid ? '' : 'Message must be at least 10 characters';
        break;
      default:
        isValid = true;
    }
    
    return { isValid, error };
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const { isValid, error } = validateField(name, value);
    
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid,
        error
      }
    }));
  };
  
  // Handle field blur
  const handleBlur = (name) => {
    setFocusedField(null);
    
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true
      }
    }));
  };
  
  // Check if form is valid whenever formState changes
  useEffect(() => {
    const isFormValid = Object.values(formState).every(field => field.isValid);
    setFormIsValid(isFormValid);
  }, [formState]);
  
  // Simulated form submission with delay
  const submitForm = async (formData) => {
    return new Promise((resolve, reject) => {
      // Simulate API call with delay
      setTimeout(() => {
        // Simulate 95% success rate
        const shouldSucceed = Math.random() <= 0.95;
        if (shouldSucceed) {
          resolve({ success: true, message: 'Form submitted successfully!' });
        } else {
          reject({ success: false, message: 'Network error. Please try again.' });
        }
      }, 2000); // 2 second delay
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    const touchedState = {};
    Object.keys(formState).forEach(key => {
      touchedState[key] = {
        ...formState[key],
        touched: true
      };
    });
    setFormState(touchedState);
    
    // If form is valid, submit
    if (formIsValid) {
      try {
        setIsSubmitting(true);
        setSubmitError('');
        
        // Extract values for submission
        const formValues = {};
        Object.keys(formState).forEach(key => {
          formValues[key] = formState[key].value;
        });
        
        // Submit form
        await submitForm(formValues);
        
        // Handle success
        setSubmitSuccess(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          // Reset form fields
          const resetState = {};
          Object.keys(formState).forEach(key => {
            resetState[key] = { value: '', touched: false, isValid: false, error: '' };
          });
          setFormState(resetState);
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        // Handle error
        setSubmitError(error.message || 'Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  // Update scroll position
  useEffect(() => {
    // Set smooth scrolling programmatically for better browser support
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom,
        ease: "easeOut"
      }
    })
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: custom => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom,
        ease: "easeOut"
      }
    })
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: custom => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
        delay: 1.2 + (custom * 0.08),
        ease: "easeOut"
      }
    })
  };

  const words = "Whether you have a question, need assistance, or want to start a new project, our team is here to help.".split(" ");

  // Add icon animation effect
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  // Add subtle fade-in animation for form fields when component mounts
  const staggerFormItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#000B1D] relative overflow-hidden">
      <style jsx global>{`
        .glow-button {
          box-shadow: 0px 0px 32px 15px rgba(0, 102, 255, 0.5);
          border: 1px solid rgba(0, 102, 255, 0.4);
          transition: all 0.8s ease-in-out;
          position: relative;
        }
        
        .glow-button:hover {
          box-shadow: 0px 0px 32px 20px rgba(0, 102, 255, 0.5);
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 12px;
          background: transparent;
          border: 0px solid rgba(0, 102, 255, 0);
          z-index: -1;
          transition: all 0.8s ease-in-out;
        }
        
        .glow-button:hover::before {
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 7px solid rgba(0, 102, 255, 0.2);
        }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }

        body {
          scroll-behavior: smooth;
        }

        /* For Safari and iOS - they need custom scrolling */
        @supports (-webkit-overflow-scrolling: touch) {
          body {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Validation styles */
        .input-valid {
          border-color: rgba(16, 185, 129, 0.5);
        }
        
        .input-invalid {
          border-color: rgba(239, 68, 68, 0.5);
        }
        
        .error-message {
          color: rgba(239, 68, 68, 0.9);
          font-size: 0.75rem;
          margin-top: 0.25rem;
          transition: all 0.3s ease;
        }

        /* Success animations */
        @keyframes successPulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        
        .success-pulse {
          animation: successPulse 2s infinite;
        }

        /* Micro-interaction styles */
        .input-field {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .input-field:focus {
          transform: translateY(-2px);
        }
        
        .contact-card {
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        /* Button hover effect */
        .btn-hover-effect {
          position: relative;
          overflow: hidden;
        }
        
        .btn-hover-effect:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
        }
        
        .btn-hover-effect:hover:after {
          transform: translateX(100%);
          transition: transform 0.8s ease;
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .mobile-heading {
            font-size: 3rem !important;
            line-height: 1.2 !important;
          }
          
          .mobile-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .mobile-py {
            padding-top: 4rem !important;
            padding-bottom: 2rem !important;
          }
          
          .mobile-card-padding {
            padding: 1.5rem !important;
          }
          
          .mobile-text-base {
            font-size: 1rem !important;
          }
          
          .input-field:focus {
            transform: none !important;
          }
          
          /* Improve touch targets */
          .touch-target {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Optimize form field spacing */
          .form-field-spacing > * {
            margin-bottom: 1.25rem;
          }
          
          /* Reduce animations on mobile for performance */
          .reduce-motion {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
      
      {/* Video Background with Overlays */}
      
      <VideoBackground speed={1.0} opacity={0.8} />
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50" />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className={`pt-32 pb-20 text-center mobile-py ${isMobile ? 'mobile-container' : 'px-6'}`}>
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
              <Badge sideText="24/7" mainText="Let's Work Together" />
          </motion.div>

          <motion.h1 
            className={`text-[80px] leading-tight font-light text-white mb-6 mobile-heading`}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="block"
              variants={fadeInUp}
              custom={0.3}
            >
              Any Questions Rising?
            </motion.span>
            <motion.span 
              className="block"
              variants={fadeInUp}
              custom={0.6}
            >
              We are All Here.
            </motion.span>
          </motion.h1>

          <motion.div 
            className="text-[#94A3B8] text-xl max-w-2xl mx-auto mb-8 overflow-hidden"
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap justify-center">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordAnimation}
                  className="mr-1 mb-1 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.button
            variants={fadeIn}
            custom={0.6}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-medium glow-button btn-hover-effect touch-target"
          >
            Fill The Form Out!
          </motion.button>
        </div>

        {/* Form Section */}
        <motion.div 
          className={`container mx-auto pb-16 ${isMobile ? 'mobile-container' : 'px-6'}`}
          variants={fadeInUp}
          custom={0.6}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
            {/* Form Card */}
            <motion.div 
              className={`bg-gradient-to-br from-[#0F1729] to-[#1A2236] border border-[#283452] rounded-[32px] p-10 relative overflow-hidden shadow-xl ${isMobile ? 'mobile-card-padding' : ''}`}
              whileHover={{ boxShadow: "0 0 40px rgba(0, 102, 255, 0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.4 
              }}
            >
              {/* Form Background Elements */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-[#0066FF]/5 to-transparent rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-t from-[#0066FF]/5 to-transparent rounded-full blur-[60px] -z-10" />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDI3MzgiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTEyIDEyaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTEyIDEyaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25 -z-10" />
              
              {/* Dotted Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}></div>
              </div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-[32px] pointer-events-none">
                <div className="absolute -left-1 top-[10%] w-[2px] h-[30%] bg-gradient-to-b from-[#0066FF]/0 via-[#0066FF]/40 to-[#0066FF]/0" />
                <div className="absolute -right-1 top-[50%] w-[2px] h-[30%] bg-gradient-to-b from-[#0066FF]/0 via-[#0066FF]/40 to-[#0066FF]/0" />
                <div className="absolute top-0 left-[30%] h-[2px] w-[20%] bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/30 to-[#0066FF]/0" />
              </div>
              
              {/* Moving Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
                <motion.div 
                  className="absolute w-2 h-2 rounded-full bg-[#0066FF]/20"
                  animate={{
                    x: ["-10%", "110%"],
                    y: ["20%", "60%"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#0066FF]/30"
                  animate={{
                    x: ["110%", "-10%"],
                    y: ["80%", "30%"]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute w-1 h-1 rounded-full bg-[#0066FF]/20"
                  animate={{
                    x: ["50%", "20%"],
                    y: ["-5%", "105%"]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
              
              <AnimatePresence>
                {submitSuccess ? (
                <motion.div 
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0F1729]/95 backdrop-blur-sm rounded-[32px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 success-pulse"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-white text-2xl font-light mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p 
                      className="text-[#94A3B8] text-lg text-center max-w-md"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Your message has been sent successfully. We'll get back to you shortly.
                    </motion.p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10 form-field-spacing">
                <motion.div 
                  className={`text-center mb-8 ${isMobile ? 'mb-4' : ''}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center gap-2 mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" 
                      animate={pulseAnimation}
                    />
                    <motion.span 
                      className="text-[#0066FF] font-semibold tracking-wider text-sm"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      CONTACT US
                    </motion.span>
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" 
                      animate={pulseAnimation}
                    />
                  </motion.div>
                  <h3 className="text-2xl text-white font-light mb-2">
                    We'd love to hear from you
                  </h3>
                  <p className="text-[#94A3B8] text-sm">
                    We'll get back to you within 24 hours
                  </p>
                </motion.div>

                <motion.div 
                  className={`space-y-6 ${isMobile ? 'space-y-4' : ''}`}
                  variants={staggerFormItems}
                  initial="hidden"
                  animate="visible"
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={formItemVariant} className="relative">
                    <label className="block text-white/80 text-sm mb-2 font-medium">First name*</label>
                    <div className="relative group">
                    <input
                      type="text"
                          name="firstName"
                      placeholder="Vimal"
                          className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all touch-target ${
                            formState.firstName.touched && !formState.firstName.isValid 
                              ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                              : formState.firstName.touched && formState.firstName.isValid
                                ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                                : 'focus:border-[#0066FF]/70'
                          }`}
                          value={formState.firstName.value}
                          onChange={handleInputChange}
                        onFocus={() => setFocusedField('firstName')}
                          onBlur={() => handleBlur('firstName')}
                          autoComplete="given-name"
                          inputMode="text"
                      />
                      <motion.div 
                          className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                            focusedField === 'firstName' && !formState.firstName.isValid && formState.firstName.value
                              ? 'bg-yellow-500' 
                              : formState.firstName.touched && !formState.firstName.isValid
                                ? 'bg-red-500'
                                : formState.firstName.isValid
                                  ? 'bg-emerald-500'
                                  : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                          }`}
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ 
                            width: focusedField === 'firstName' ? "50%" : formState.firstName.touched ? "30%" : "0%", 
                            opacity: focusedField === 'firstName' || formState.firstName.touched ? 1 : 0 
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ bottom: "-8px" }}
                      />
                    </div>
                      {formState.firstName.touched && formState.firstName.error && (
                        <motion.div 
                          className="error-message"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {formState.firstName.error}
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div variants={formItemVariant} className="relative">
                    <label className="block text-white/80 text-sm mb-2 font-medium">Last Name*</label>
                    <div className="relative group">
                    <input
                      type="text"
                          name="lastName"
                      placeholder="Raj"
                          className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all touch-target ${
                            formState.lastName.touched && !formState.lastName.isValid 
                              ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                              : formState.lastName.touched && formState.lastName.isValid
                                ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                                : 'focus:border-[#0066FF]/70'
                          }`}
                          value={formState.lastName.value}
                          onChange={handleInputChange}
                        onFocus={() => setFocusedField('lastName')}
                          onBlur={() => handleBlur('lastName')}
                          autoComplete="family-name"
                          inputMode="text"
                      />
                      <motion.div 
                          className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                            focusedField === 'lastName' && !formState.lastName.isValid && formState.lastName.value
                              ? 'bg-yellow-500' 
                              : formState.lastName.touched && !formState.lastName.isValid
                                ? 'bg-red-500'
                                : formState.lastName.isValid
                                  ? 'bg-emerald-500'
                                  : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                          }`}
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ 
                            width: focusedField === 'lastName' ? "50%" : formState.lastName.touched ? "30%" : "0%", 
                            opacity: focusedField === 'lastName' || formState.lastName.touched ? 1 : 0 
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ bottom: "-8px" }}
                      />
                    </div>
                      {formState.lastName.touched && formState.lastName.error && (
                        <motion.div 
                          className="error-message"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {formState.lastName.error}
                        </motion.div>
                      )}
                    </motion.div>
                </div>

                  <motion.div variants={formItemVariant} className="relative">
                  <label className="block text-white/80 text-sm mb-2 font-medium">How can we reach you?*</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <motion.svg 
                          className={`w-5 h-5 text-[#0066FF]/70 ${isMobile ? 'reduce-motion' : ''}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                          animate={{ 
                            translateY: focusedField === 'email' ? [-1, 1, -1] : 0,
                          }}
                          transition={{ 
                            duration: 0.5, 
                            repeat: focusedField === 'email' ? Infinity : 0 
                          }}
                        >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </motion.svg>
                    </div>
                  <input
                    type="email"
                        name="email"
                    placeholder="vimal@gmail.com"
                        className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all touch-target ${
                          formState.email.touched && !formState.email.isValid 
                            ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                            : formState.email.touched && formState.email.isValid
                              ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                              : 'focus:border-[#0066FF]/70'
                        }`}
                        value={formState.email.value}
                        onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                        onBlur={() => handleBlur('email')}
                        autoComplete="email"
                        inputMode="email"
                    />
                    <motion.div 
                        className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                          focusedField === 'email' && !formState.email.isValid && formState.email.value
                            ? 'bg-yellow-500' 
                            : formState.email.touched && !formState.email.isValid
                              ? 'bg-red-500'
                              : formState.email.isValid
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                        }`}
                      initial={{ width: "0%", opacity: 0 }}
                      animate={{ 
                          width: focusedField === 'email' ? "50%" : formState.email.touched ? "30%" : "0%", 
                          opacity: focusedField === 'email' || formState.email.touched ? 1 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ bottom: "-8px" }}
                    />
                  </div>
                    {formState.email.touched && formState.email.error && (
                      <motion.div 
                        className="error-message"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {formState.email.error}
                      </motion.div>
                    )}
                  </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={formItemVariant} className="relative">
                    <label className="block text-white/80 text-sm mb-2 font-medium">Where Are you from?*</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <select 
                          name="country"
                          className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all touch-target ${
                            formState.country.touched && !formState.country.isValid 
                              ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                              : formState.country.touched && formState.country.isValid
                                ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                                : 'focus:border-[#0066FF]/70'
                          }`}
                          value={formState.country.value}
                          onChange={handleInputChange}
                        onFocus={() => setFocusedField('country')}
                          onBlur={() => handleBlur('country')}
                      >
                        <option value="" className="bg-[#141E32]">Select your country...</option>
                        <option value="Amsterdam" className="bg-[#141E32]">Amsterdam</option>
                        <option value="Barcelona" className="bg-[#141E32]">Barcelona</option>
                        <option value="India" className="bg-[#141E32]">India</option>
                        <option value="United States" className="bg-[#141E32]">United States</option>
                    </select>
                      <motion.div 
                          className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                            formState.country.touched && !formState.country.isValid
                              ? 'bg-red-500'
                              : formState.country.isValid
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                          }`}
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ 
                            width: focusedField === 'country' ? "50%" : formState.country.touched ? "30%" : "0%", 
                            opacity: focusedField === 'country' || formState.country.touched ? 1 : 0 
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ bottom: "-8px" }}
                      />
                    </div>
                      {formState.country.touched && formState.country.error && (
                        <motion.div 
                          className="error-message"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {formState.country.error}
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div variants={formItemVariant} className="relative">
                      <label className="block text-white/80 text-sm mb-2 font-medium">Company Type*</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <select 
                          name="companyType"
                          className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all touch-target ${
                            formState.companyType.touched && !formState.companyType.isValid 
                              ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                              : formState.companyType.touched && formState.companyType.isValid
                                ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                                : 'focus:border-[#0066FF]/70'
                          }`}
                          value={formState.companyType.value}
                          onChange={handleInputChange}
                        onFocus={() => setFocusedField('companyType')}
                          onBlur={() => handleBlur('companyType')}
                      >
                        <option value="" className="bg-[#141E32]">Select Category</option>
                        <option value="Agency" className="bg-[#141E32]">Agency</option>
                        <option value="SAAS" className="bg-[#141E32]">SAAS</option>
                        <option value="Banking" className="bg-[#141E32]">Banking</option>
                        <option value="Business" className="bg-[#141E32]">Business</option>
                        <option value="Other" className="bg-[#141E32]">Other</option>
                    </select>
                      <motion.div 
                          className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                            formState.companyType.touched && !formState.companyType.isValid
                              ? 'bg-red-500'
                              : formState.companyType.isValid
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                          }`}
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ 
                            width: focusedField === 'companyType' ? "50%" : formState.companyType.touched ? "30%" : "0%", 
                            opacity: focusedField === 'companyType' || formState.companyType.touched ? 1 : 0 
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ bottom: "-8px" }}
                      />
                    </div>
                      {formState.companyType.touched && formState.companyType.error && (
                        <motion.div 
                          className="error-message"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {formState.companyType.error}
                        </motion.div>
                      )}
                    </motion.div>
                </div>

                  <motion.div variants={formItemVariant} className="relative">
                  <label className="block text-white/80 text-sm mb-2 font-medium">Message*</label>
                  <div className="relative group">
                  <textarea
                        rows={isMobile ? "3" : "4"}
                        name="message"
                    placeholder="Type your message..."
                        className={`input-field w-full bg-[#141E32]/70 border border-[#283452] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#0066FF]/70 transition-all ${
                          formState.message.touched && !formState.message.isValid 
                            ? 'input-invalid focus:border-red-500 focus:ring-red-500/70' 
                            : formState.message.touched && formState.message.isValid
                              ? 'input-valid focus:border-emerald-500 focus:ring-emerald-500/70'
                              : 'focus:border-[#0066FF]/70'
                        }`}
                        value={formState.message.value}
                        onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                        onBlur={() => handleBlur('message')}
                    />
                    <motion.div 
                        className={`absolute bottom-0 left-1/2 h-[2px] rounded-full transform -translate-x-1/2 ${
                          focusedField === 'message' && !formState.message.isValid && formState.message.value
                            ? 'bg-yellow-500' 
                            : formState.message.touched && !formState.message.isValid
                              ? 'bg-red-500'
                              : formState.message.isValid
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-[#0066FF]/50 via-[#0066FF] to-[#0066FF]/50'
                        }`}
                      initial={{ width: "0%", opacity: 0 }}
                      animate={{ 
                          width: focusedField === 'message' ? "50%" : formState.message.touched ? "30%" : "0%", 
                          opacity: focusedField === 'message' || formState.message.touched ? 1 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ bottom: "-8px" }}
                    />
                  </div>
                    {formState.message.touched && formState.message.error && (
                      <motion.div 
                        className="error-message"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {formState.message.error}
                      </motion.div>
                    )}
                    {formState.message.value && (
                      <div className={`text-xs mt-1 text-right ${
                        formState.message.value.length < 10 ? 'text-red-400' : 'text-emerald-400'
                      }`}>
                        {formState.message.value.length} characters
                        {formState.message.value.length < 10 && ` (minimum 10)`}
                </div>
                    )}
                  </motion.div>

                  {/* Display error message if there is one */}
                  <AnimatePresence>
                    {submitError && (
                      <motion.div 
                        className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-lg text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {submitError}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                <motion.button
                  type="submit"
                    className={`w-full text-white py-4 rounded-xl text-lg font-medium relative overflow-hidden group btn-hover-effect touch-target ${
                      formIsValid && !isSubmitting
                        ? 'bg-gradient-to-r from-[#0066FF] to-[#0055DD] hover:from-[#0055DD] hover:to-[#0066FF]' 
                        : isSubmitting
                          ? 'bg-[#0066FF]/80'
                          : 'bg-gradient-to-r from-[#0066FF]/50 to-[#0055DD]/50 cursor-not-allowed'
                    }`}
                    whileHover={{ scale: formIsValid && !isSubmitting ? 1.02 : 1, boxShadow: formIsValid && !isSubmitting ? "0 0 15px rgba(0, 102, 255, 0.5)" : "none" }}
                    whileTap={{ scale: formIsValid && !isSubmitting ? 0.98 : 1 }}
                    disabled={!formIsValid || isSubmitting}
                    variants={formItemVariant}
                >
                    <span className="relative z-10">
                      {isSubmitting ? <LoadingSpinner /> : "Submit Now"}
                    </span>
                    {formIsValid && !isSubmitting && !isMobile && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/0 via-white/10 to-[#0066FF]/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                    )}
                </motion.button>
                </motion.div>
                
                {/* Form Completion Indicator */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className={`w-2 h-2 rounded-full ${
                        isSubmitting ? 'bg-yellow-500' :
                        formIsValid ? 'bg-emerald-500' : 'bg-[#0066FF]'
                      } ${isMobile ? 'reduce-motion' : ''}`}
                      animate={isMobile ? {} : { scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-white/60 text-xs">
                      {isSubmitting ? 'Submitting...' :
                       formIsValid ? 'All fields completed' : 'All fields are required'}
                    </span>
                  </div>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-white/60 text-xs">Secure Form</span>
                    <motion.svg 
                      className={`w-4 h-4 ml-1 text-[#0066FF] ${isMobile ? 'reduce-motion' : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={isMobile ? {} : { scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>
                </div>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <div className={`space-y-6 ${isMobile ? 'space-y-4' : ''}`}>
              {/* Email Card */}
              <motion.div 
                className="contact-card bg-gradient-to-br from-[#0F1729] to-[#1A2236] border border-[#283452] rounded-[24px] relative overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                onHoverStart={() => setHoveredCard('email')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent rounded-full blur-[30px] -z-10" />

                {/* Content */}
                <div className={`p-8 relative z-10 ${isMobile ? 'p-4' : ''}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className={`${isMobile ? 'w-9 h-9' : 'w-12 h-12'} bg-[#0066FF]/10 rounded-xl flex items-center justify-center`}
                      animate={isMobile ? {} : { rotate: hoveredCard === 'email' ? [0, 5, -5, 0] : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.svg 
                        className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-[#0066FF]`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'email' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </motion.svg>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} font-medium mb-0.5`}>Email Us</h3>
                      <p className={`text-[#94A3B8] ${isMobile ? 'text-xs' : 'text-sm'} transition-colors group-hover:text-[#B9CCEB]`}>
                        We respond within 24 hours
                      </p>
                    </div>
                    <div className="flex items-center">
                      <ModernBadge text="24/7" type="primary" />
                    </div>
                  </div>
                  
                  <div className={`${isMobile ? 'pl-9' : 'pl-16'}`}>
                    <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-lg'} group-hover:text-white transition-colors font-medium`}>
                      help [at] NexEV.com
                    </p>
                    <motion.button
                      className="mt-2 flex items-center text-[#0066FF] hover:text-[#0066FF]/80 text-sm font-medium touch-target"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className={isMobile ? 'text-xs' : ''}>Send message</span>
                      <motion.svg 
                        className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} ml-1`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'email' ? { x: [0, 4, 0] } : { x: 0 }}
                        transition={{ duration: 1, repeat: hoveredCard === 'email' ? Infinity : 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.button>
                  </div>
                  
                  {/* Highlight line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/50 to-[#0066FF]/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                className="contact-card bg-gradient-to-br from-[#0F1729] to-[#1A2236] border border-[#283452] rounded-[24px] relative overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onHoverStart={() => setHoveredCard('phone')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent rounded-full blur-[30px] -z-10" />

                {/* Content */}
                <div className={`p-8 relative z-10 ${isMobile ? 'p-4' : ''}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className={`${isMobile ? 'w-9 h-9' : 'w-12 h-12'} bg-[#0066FF]/10 rounded-xl flex items-center justify-center`}
                      animate={isMobile ? {} : { rotate: hoveredCard === 'phone' ? [0, 5, -5, 0] : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.svg 
                        className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-[#0066FF]`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'phone' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </motion.svg>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} font-medium mb-0.5`}>Call Us</h3>
                      <p className={`text-[#94A3B8] ${isMobile ? 'text-xs' : 'text-sm'} transition-colors group-hover:text-[#B9CCEB]`}>
                        Direct voice support
                      </p>
                    </div>
                    <div className="flex items-center">
                      <ModernBadge text="Available" type="secondary" />
                    </div>
                  </div>

                  <div className={`${isMobile ? 'pl-9' : 'pl-16'}`}>
                    <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-lg'} group-hover:text-white transition-colors font-medium`}>
                      +91 8838737180
                    </p>
                    <motion.button
                      className="mt-2 flex items-center text-[#0066FF] hover:text-[#0066FF]/80 text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className={isMobile ? 'text-xs' : ''}>Schedule a call</span>
                      <motion.svg 
                        className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} ml-1`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'phone' ? { x: [0, 4, 0] } : { x: 0 }}
                        transition={{ duration: 1, repeat: hoveredCard === 'phone' ? Infinity : 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.button>
                  </div>
                  
                  {/* Highlight line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/50 to-[#0066FF]/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div 
                className="contact-card bg-gradient-to-br from-[#0F1729] to-[#1A2236] border border-[#283452] rounded-[24px] relative overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                onHoverStart={() => setHoveredCard('address')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent rounded-full blur-[30px] -z-10" />

                {/* Content */}
                <div className={`p-8 relative z-10 ${isMobile ? 'p-4' : ''}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className={`${isMobile ? 'w-9 h-9' : 'w-12 h-12'} bg-[#0066FF]/10 rounded-xl flex items-center justify-center`}
                      animate={isMobile ? {} : { rotate: hoveredCard === 'address' ? [0, 5, -5, 0] : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.svg 
                        className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-[#0066FF]`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'address' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} font-medium mb-0.5`}>Location</h3>
                      <p className={`text-[#94A3B8] ${isMobile ? 'text-xs' : 'text-sm'} transition-colors group-hover:text-[#B9CCEB]`}>
                        Our headquarters
                      </p>
                    </div>
                    <div className="flex items-center">
                      <ModernBadge text="REMOTE" type="secondary" />
                    </div>
                  </div>

                  <div className={`${isMobile ? 'pl-9' : 'pl-16'}`}>
                    <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-lg'} group-hover:text-white transition-colors font-medium`}>
                      Chennai, TamilNadu
                    </p>
                    <motion.button
                      className="mt-2 flex items-center text-[#0066FF] hover:text-[#0066FF]/80 text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className={isMobile ? 'text-xs' : ''}>Get directions</span>
                      <motion.svg 
                        className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} ml-1`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'address' ? { x: [0, 4, 0] } : { x: 0 }}
                        transition={{ duration: 1, repeat: hoveredCard === 'address' ? Infinity : 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.button>
                  </div>
                  
                  {/* Highlight line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/50 to-[#0066FF]/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>
              
              {/* Social Media Card */}
              <motion.div 
                className="contact-card bg-gradient-to-br from-[#0F1729] to-[#1A2236] border border-[#283452] rounded-[24px] relative overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                onHoverStart={() => setHoveredCard('social')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent rounded-full blur-[30px] -z-10" />

                {/* Content */}
                <div className={`p-8 relative z-10 ${isMobile ? 'p-4' : ''}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className={`${isMobile ? 'w-9 h-9' : 'w-12 h-12'} bg-[#0066FF]/10 rounded-xl flex items-center justify-center`}
                      animate={isMobile ? {} : { rotate: hoveredCard === 'social' ? [0, 5, -5, 0] : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.svg 
                        className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-[#0066FF]`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={isMobile ? {} : hoveredCard === 'social' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </motion.svg>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} font-medium mb-0.5`}>Connect</h3>
                      <p className={`text-[#94A3B8] ${isMobile ? 'text-xs' : 'text-sm'} transition-colors group-hover:text-[#B9CCEB]`}>
                        Follow us on social media
                      </p>
                    </div>
                  </div>
                  
                  <div className={`${isMobile ? 'pl-9' : 'pl-16'} flex flex-wrap items-center gap-2`}>
                    <motion.a 
                      href="#" 
                      className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-[#141E32] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#192639] transition-colors`}
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 102, 255, 0.3)" }}
                    >
                      <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#0066FF]`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-[#141E32] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#192639] transition-colors`}
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 102, 255, 0.3)" }}
                    >
                      <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#0066FF]`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-[#141E32] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#192639] transition-colors`}
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 102, 255, 0.3)" }}
                    >
                      <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#0066FF]`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-[#141E32] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#192639] transition-colors`}
                      whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 102, 255, 0.3)" }}
                    >
                      <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-[#0066FF]`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </motion.a>
                  </div>
                  
                  {/* Highlight line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/50 to-[#0066FF]/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
              </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <FAQ />

        {/* Join Us Section */}
        <JoinUsSection 
          badgeText="Join Us Now"
          headingText="Each Project we Undertake<br />is a Unique Opportunity."
          descriptionText="Ready to take the next step? Join us now and start transforming your vision into reality with expert support."
          buttonText="Book an Appointment"
        />
      </div>
      
      {/* Bottom Blur Effect */}
      <BlurEffect />
      
      {/* Back to Top Button */}
      <BackToTop bottom={isMobile ? '1.5rem' : '2rem'} />
    </div>
  );
};

export default Contact; 