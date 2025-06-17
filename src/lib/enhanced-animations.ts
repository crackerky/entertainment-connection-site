// Enhanced Micro-Interactions for 2025
export const advancedMicroInteractions = {
  // Magnetic hover effect
  magnetic: {
    whileHover: (event: any) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) * 0.1;
      const y = (clientY - top - height / 2) * 0.1;
      return {
        x,
        y,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      };
    },
    whileLeave: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  },

  // Multi-stage hover interaction
  progressiveHover: {
    initial: { scale: 1, rotateY: 0, z: 0 },
    whileHover: {
      scale: [1, 1.02, 1.05, 1.02],
      rotateY: [0, 2, -2, 0],
      z: [0, 10, 20, 10],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },

  // Ripple effect
  ripple: {
    whileTap: {
      scale: [1, 0.95, 1.02, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },

  // Morphing shape
  morphingShape: {
    whileHover: {
      borderRadius: ["10px", "20px", "30px", "15px"],
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }
};

// Advanced Scroll-Triggered Animations
export const advancedScrollAnimations = {
  // Staggered reveal with elastic effect
  elasticStagger: {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1
      }
    },
    viewport: { once: true, amount: 0.3 }
  },

  // 3D rotation reveal
  rotation3D: {
    initial: { 
      opacity: 0, 
      rotateX: -90, 
      rotateY: 30,
      perspective: 1000 
    },
    whileInView: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    viewport: { once: true, amount: 0.5 }
  },

  // Liquid morphing
  liquidMorph: {
    initial: { 
      clipPath: "circle(0% at 50% 50%)",
      scale: 0.8
    },
    whileInView: {
      clipPath: "circle(100% at 50% 50%)",
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    viewport: { once: true, amount: 0.3 }
  },

  // Text wave animation
  textWave: {
    animate: (index: number) => ({
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: index * 0.1,
        ease: "easeInOut"
      }
    })
  },

  // Image parallax with depth
  parallaxDepth: {
    initial: { y: 0, scale: 1.1 },
    whileInView: {
      y: -50,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }
};

// Interactive particle system
export const particleSystem = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  particle: {
    initial: { 
      opacity: 0, 
      scale: 0,
      x: 0,
      y: 0
    },
    animate: (index: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.sin(index) * 50,
      y: Math.cos(index) * 50,
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: index * 0.2,
        ease: "easeInOut"
      }
    })
  }
};

// Advanced button interactions
export const smartButton = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 15px rgba(139, 92, 246, 0.2)"
  },
  whileHover: {
    scale: 1.05,
    boxShadow: [
      "0 4px 15px rgba(139, 92, 246, 0.2)",
      "0 8px 30px rgba(139, 92, 246, 0.4)",
      "0 12px 45px rgba(139, 92, 246, 0.6)"
    ],
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  whileTap: {
    scale: 0.95,
    boxShadow: "0 2px 8px rgba(139, 92, 246, 0.3)",
    transition: { duration: 0.1 }
  }
};

// Card stack animation
export const cardStack = {
  container: {
    hover: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  card: (index: number) => ({
    initial: { 
      rotateY: 0,
      z: index * -10,
      x: 0
    },
    whileHover: {
      rotateY: index * 5,
      z: index * 20,
      x: index * 10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  })
};

// Loading skeleton with shimmer
export const shimmerEffect = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Scroll-triggered number counter
export const numberCounter = (target: number, duration: number = 2) => ({
  initial: { value: 0 },
  whileInView: {
    value: target,
    transition: {
      duration,
      ease: "easeOut"
    }
  },
  viewport: { once: true, amount: 0.8 }
});