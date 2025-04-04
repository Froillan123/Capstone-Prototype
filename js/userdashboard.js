  // Toggle chat interface
  const chatIcon = document.getElementById('chatIcon');
  const chatContainer = document.getElementById('chatContainer');
  const closeChat = document.getElementById('closeChat');

  chatIcon.addEventListener('click', () => {
      chatContainer.classList.add('active');
      chatIcon.classList.add('hidden');
  });

  closeChat.addEventListener('click', () => {
      chatContainer.classList.remove('active');
      chatIcon.classList.remove('hidden');
  });

  // Send message functionality
  const chatInput = document.getElementById('chatInput');
  const sendMessage = document.getElementById('sendMessage');
  const chatMessages = document.getElementById('chatMessages');

  function sendUserMessage() {
      const messageText = chatInput.value.trim();
      if (messageText) {
          // Add user message
          const userMessage = document.createElement('div');
          userMessage.className = 'message user';
          userMessage.innerHTML = `
              <div class="message-content">${messageText}</div>
              <div class="message-time">${getCurrentTime()}</div>
          `;
          chatMessages.appendChild(userMessage);
          
          // Clear input
          chatInput.value = '';
          
          // Scroll to bottom
          chatMessages.scrollTop = chatMessages.scrollHeight;
          
          // Simulate bot response after a delay
          setTimeout(sendBotResponse, 1000);
      }
  }

  function sendBotResponse() {
      const responses = [
          "I understand. Would you like me to show you available therapists?",
          "Your mental health is important. Let me help you find the right support.",
          "I can see you're taking positive steps. Would you like to schedule a session?",
          "Based on your preferences, I recommend Dr. Smith who specializes in CBT.",
          "Remember, it's okay to ask for help. I'm here to support you."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot';
      botMessage.innerHTML = `
          <div class="message-content">${randomResponse}</div>
          <div class="message-time">${getCurrentTime()}</div>
      `;
      chatMessages.appendChild(botMessage);
      
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getCurrentTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      return `${hours}:${minutes} ${ampm}`;
  }

  // Send message on button click or Enter key
  sendMessage.addEventListener('click', sendUserMessage);
  chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendUserMessage();
      }
  });

  // Toggle sidebar expansion (for demonstration)
  const sidebar = document.querySelector('.sidebar');
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebar.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
  });

  // Set active sidebar item
  sidebarItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.stopPropagation();
          sidebarItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
      });
  });

  // Profile dropdown toggle
  const userProfile = document.getElementById('userProfile');
  const profileDropdown = document.getElementById('profileDropdown');

  userProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
  });

  // Book session modal
  const bookSessionBtn = document.getElementById('bookSessionBtn');
  const bookSessionModal = document.getElementById('bookSessionModal');
  const closeBookModal = document.getElementById('closeBookModal');
  const cancelBookSession = document.getElementById('cancelBookSession');

  bookSessionBtn.addEventListener('click', () => {
      bookSessionModal.classList.add('active');
  });

  closeBookModal.addEventListener('click', () => {
      bookSessionModal.classList.remove('active');
  });

  cancelBookSession.addEventListener('click', () => {
      bookSessionModal.classList.remove('active');
  });

  // Close modal when clicking outside
  bookSessionModal.addEventListener('click', (e) => {
      if (e.target === bookSessionModal) {
          bookSessionModal.classList.remove('active');
      }
  });

  // Initialize progress bars animation
  document.addEventListener('DOMContentLoaded', () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
              bar.style.width = width;
          }, 100);
      });
  });