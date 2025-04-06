document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const therapistSwiper = new Swiper('.therapistSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Therapist data for modals
    const therapists = {
        1: {
            name: "Dr. Sarah Johnson",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            specialty: "Clinical Psychologist",
            status: "Online",
            experience: "15 years",
            rating: "4.9 ★ (128 reviews)",
            about: "Dr. Johnson specializes in cognitive behavioral therapy for anxiety and depression. She has helped hundreds of patients regain control of their lives through evidence-based treatments.",
            specializations: ["Anxiety Disorders", "Depression", "Stress Management", "Self-Esteem Issues"],
            availability: ["10:00 AM", "1:00 PM", "3:00 PM", "4:30 PM"],
            reviews: [
                {
                    author: "Jessica T.",
                    rating: "★★★★★",
                    date: "2 weeks ago",
                    content: "Dr. Johnson changed my life. Her approach to CBT made so much sense and I've seen tremendous progress in just 3 months."
                },
                {
                    author: "Michael R.",
                    rating: "★★★★★",
                    date: "1 month ago",
                    content: "Very professional and empathetic. She creates a safe space to discuss difficult topics."
                }
            ]
        },
        2: {
            name: "Dr. Michael Chen",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            specialty: "Cognitive Behavioral Therapist",
            status: "In Session",
            experience: "8 years",
            rating: "4.8 ★ (92 reviews)",
            about: "Dr. Chen focuses on exposure therapy for OCD and trauma-related disorders. He combines traditional CBT with mindfulness techniques for comprehensive care.",
            specializations: ["OCD", "PTSD", "Phobias", "Anxiety"],
            availability: ["2:00 PM", "5:00 PM"],
            reviews: [
                {
                    author: "David L.",
                    rating: "★★★★★",
                    date: "3 weeks ago",
                    content: "Dr. Chen's approach to my OCD has been life-changing. I finally feel in control of my thoughts."
                },
                {
                    author: "Sarah K.",
                    rating: "★★★★☆",
                    date: "2 months ago",
                    content: "Very knowledgeable about trauma responses. The sessions can be intense but extremely helpful."
                }
            ]
        },
        3: {
            name: "Dr. Amina Patel",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            specialty: "Child Psychologist",
            status: "Offline",
            experience: "12 years",
            rating: "4.7 ★ (156 reviews)",
            about: "Dr. Patel specializes in play therapy and family counseling for children and adolescents. She believes in a holistic approach that involves the entire family in the healing process.",
            specializations: ["ADHD", "Autism Spectrum", "Childhood Anxiety", "Behavioral Issues"],
            availability: ["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM"],
            reviews: [
                {
                    author: "Parent of Emma (age 8)",
                    rating: "★★★★★",
                    date: "1 month ago",
                    content: "My daughter looks forward to her sessions with Dr. Patel. We've seen huge improvements in her anxiety at school."
                },
                {
                    author: "James H.",
                    rating: "★★★★★",
                    date: "2 months ago",
                    content: "Dr. Patel helped our family understand our son's ADHD better and gave us practical strategies."
                }
            ]
        },
        4: {
            name: "Dr. Robert Williams",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
            specialty: "Marriage Counselor",
            status: "Online",
            experience: "10 years",
            rating: "4.8 ★ (112 reviews)",
            about: "Dr. Williams specializes in couples therapy and family dynamics. His approach focuses on improving communication and rebuilding trust in relationships.",
            specializations: ["Couples Therapy", "Family Counseling", "Relationship Issues", "Divorce Counseling"],
            availability: ["9:00 AM", "12:00 PM", "4:00 PM"],
            reviews: [
                {
                    author: "Mark & Susan",
                    rating: "★★★★★",
                    date: "3 weeks ago",
                    content: "Saved our marriage. We were on the brink of divorce and Dr. Williams helped us reconnect."
                },
                {
                    author: "Lisa P.",
                    rating: "★★★★☆",
                    date: "1 month ago",
                    content: "Very insightful sessions. He helps you see patterns in your relationship you didn't notice before."
                }
            ]
        },
        5: {
            name: "Dr. Emily Zhang",
            img: "https://randomuser.me/api/portraits/women/33.jpg",
            specialty: "Neuropsychologist",
            status: "Online",
            experience: "7 years",
            rating: "4.9 ★ (87 reviews)",
            about: "Dr. Zhang focuses on neurodevelopmental disorders and cognitive rehabilitation. She uses evidence-based techniques to help patients improve executive functioning and emotional regulation.",
            specializations: ["ADHD", "Autism Spectrum", "Learning Disabilities", "Brain Injury Rehabilitation"],
            availability: ["12:30 PM", "3:30 PM", "5:30 PM"],
            reviews: [
                {
                    author: "Thomas R.",
                    rating: "★★★★★",
                    date: "2 weeks ago",
                    content: "Dr. Zhang's strategies for managing my ADHD have been incredibly effective. I'm more productive than ever."
                },
                {
                    author: "Parent of Noah (age 10)",
                    rating: "★★★★★",
                    date: "1 month ago",
                    content: "She has a special way of connecting with children. My son's school performance has improved dramatically."
                }
            ]
        },
        6: {
            name: "Dr. David Wilson",
            img: "https://randomuser.me/api/portraits/men/55.jpg",
            specialty: "Trauma Specialist",
            status: "In Session",
            experience: "14 years",
            rating: "4.7 ★ (143 reviews)",
            about: "Dr. Wilson specializes in trauma-focused therapies including EMDR and prolonged exposure. He works with patients who have experienced various forms of trauma to process their experiences and regain control of their lives.",
            specializations: ["PTSD", "Trauma", "EMDR Therapy", "Anxiety Disorders"],
            availability: ["8:30 AM", "11:00 AM", "4:00 PM"],
            reviews: [
                {
                    author: "Veteran (anonymous)",
                    rating: "★★★★★",
                    date: "3 weeks ago",
                    content: "After years of struggling with PTSD, Dr. Wilson's EMDR therapy has given me my life back."
                },
                {
                    author: "Maria G.",
                    rating: "★★★★★",
                    date: "2 months ago",
                    content: "I was skeptical about trauma therapy, but Dr. Wilson made me feel safe and understood throughout the process."
                }
            ]
        }
    };

    // Modal functionality
    const modal = document.getElementById('therapistModal');
    const bookingModal = document.getElementById('bookingModal');
    const viewButtons = document.querySelectorAll('.view-btn');
    const bookButtons = document.querySelectorAll('.book-btn');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalBookBtn = document.getElementById('modalBookBtn');
    const cancelBookingBtn = document.getElementById('cancelBookingBtn');
    const confirmBookingBtn = document.getElementById('confirmBookingBtn');
    let currentTherapist = null;

    // View Profile Button Click
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const therapistId = this.getAttribute('data-therapist');
            currentTherapist = therapists[therapistId];
            openTherapistModal(currentTherapist);
        });
    });

    // Book Session Button Click (from card)
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const therapistName = this.getAttribute('data-therapist');
            currentTherapist = Object.values(therapists).find(t => t.name === therapistName);
            openBookingModal(currentTherapist);
        });
    });

    // Book Session Button Click (from modal)
    modalBookBtn.addEventListener('click', function() {
        openBookingModal(currentTherapist);
        modal.style.display = 'none';
    });

    // Close Modal Buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
            bookingModal.style.display = 'none';
        });
    });

    // Cancel Booking Button
    cancelBookingBtn.addEventListener('click', function() {
        bookingModal.style.display = 'none';
    });

    // Confirm Booking Button
    confirmBookingBtn.addEventListener('click', function() {
        const date = document.getElementById('sessionDate').value;
        const time = document.getElementById('sessionTime').value;
        const notes = document.getElementById('sessionNotes').value;
        
        if (!date || !time) {
            alert('Please select both date and time for your session.');
            return;
        }
        
        // Here you would typically send this data to your backend
        alert(`Booking confirmed with ${currentTherapist.name} on ${date} at ${time}. We've sent a confirmation to your email.`);
        
        // Reset form and close modal
        document.getElementById('sessionDate').value = '';
        document.getElementById('sessionTime').value = '';
        document.getElementById('sessionNotes').value = '';
        bookingModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    // Date change handler for booking modal
    document.getElementById('sessionDate')?.addEventListener('change', function() {
        const date = this.value;
        const timeSelect = document.getElementById('sessionTime');
        
        // Clear previous options
        timeSelect.innerHTML = '<option value="">-- Select a time slot --</option>';
        
        if (date) {
            // In a real app, you would fetch available times from your backend
            // Here we're just using the therapist's general availability
            currentTherapist.availability.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    });

    function openTherapistModal(therapist) {
        document.getElementById('modalTherapistImg').src = therapist.img;
        document.getElementById('modalTherapistName').textContent = therapist.name;
        document.getElementById('modalTherapistSpecialty').textContent = therapist.specialty;
        document.getElementById('modalTherapistAbout').textContent = therapist.about;
        
        // Set status badge
        const statusBadge = document.getElementById('modalTherapistStatus');
        statusBadge.textContent = therapist.status;
        statusBadge.className = 'status-badge ' + 
            (therapist.status === 'Online' ? 'badge-online' : 
             therapist.status === 'In Session' ? 'badge-busy' : 'badge-offline');
        
        // Set specializations
        const specializationsList = document.getElementById('modalTherapistSpecializations');
        specializationsList.innerHTML = '';
        therapist.specializations.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specializationsList.appendChild(li);
        });
        
        // Set availability
        const availabilitySlots = document.getElementById('modalTherapistAvailability');
        availabilitySlots.innerHTML = '';
        therapist.availability.forEach(slot => {
            const div = document.createElement('div');
            div.className = 'slot';
            div.textContent = slot;
            availabilitySlots.appendChild(div);
        });
        
        // Set reviews
        const reviewsContainer = document.getElementById('modalTherapistReviews');
        reviewsContainer.innerHTML = '';
        therapist.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            
            const header = document.createElement('div');
            header.className = 'review-header';
            
            const author = document.createElement('span');
            author.className = 'review-author';
            author.textContent = review.author;
            
            const rating = document.createElement('span');
            rating.className = 'review-rating';
            rating.textContent = review.rating;
            
            const date = document.createElement('span');
            date.className = 'review-date';
            date.textContent = review.date;
            
            header.appendChild(author);
            header.appendChild(rating);
            
            const content = document.createElement('div');
            content.className = 'review-content';
            content.textContent = review.content;
            
            reviewDiv.appendChild(header);
            reviewDiv.appendChild(date);
            reviewDiv.appendChild(content);
            
            reviewsContainer.appendChild(reviewDiv);
        });
        
        modal.style.display = 'block';
    }

    function openBookingModal(therapist) {
        document.getElementById('bookingTherapistName').textContent = therapist.name;
        bookingModal.style.display = 'block';
    }
});