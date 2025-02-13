// Enhanced Portfolio JavaScript

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animation for sections
const fadeElems = document.querySelectorAll('.fade-in');

const fadeIn = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.3,
});

fadeElems.forEach(elem => fadeObserver.observe(elem));

// Skills charts
const technicalSkillsChart = new Chart(document.getElementById('technicalSkillsChart'), {
  type: 'radar',
  data: {
    labels: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'Machine Learning', 'Data Analysis'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 80, 85, 75, 70],
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      borderColor: 'rgba(52, 152, 219, 1)',
      pointBackgroundColor: 'rgba(52, 152, 219, 1)',
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});

const softSkillsChart = new Chart(document.getElementById('softSkillsChart'), {
  type: 'bar',
  data: {
    labels: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership'],
    datasets: [{
      label: 'Skill Level',
      data: [85, 90, 95, 80, 85],
      backgroundColor: 'rgba(46, 204, 113, 0.6)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Typing effect for home section
const typeWriter = (text, i, fnCallback) => {
  if (i < text.length) {
    document.querySelector(".lead").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
    setTimeout(() => {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

// Start the typing effect
window.addEventListener('load', () => {
  const text = "Student | Developer | Innovator";
  typeWriter(text, 0);
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

// Form submission
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you would typically send the form data to a server
  // For this example, we'll just show an alert
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '&uarr;';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', (event) => {
const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 30;
    const angleY = (centerX - x) / 30;
    
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});
});

document.addEventListener('DOMContentLoaded', (event) => {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});


