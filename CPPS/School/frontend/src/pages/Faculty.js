import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Manish Kumar',
      position: 'Managing Director',
      qualification: 'B.A.',
      experience: '20+ Years',
      image: '/image/FAC1.png'
    },
    {
      id: 2,
      name: 'Raj Kumar Singh',
      position: 'Principal',
      qualification: 'M.A.',
      experience: '18+ Years',
      image: '/image/FAC2.jpeg'
    },
    {
      id: 3,
      name: 'Krishna Kumar',
      position: 'Science Teacher',
      qualification: 'M.Sc. Physics',
      experience: '15+ Years',
      image: '/image/FAC3.png'
    },
    {
      id: 4,
      name: 'M.N Singh',
      position: 'English Teacher',
      qualification: 'M.A. English',
      experience: '15+ Years',
      image: '/image/FAC4.png'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      position: 'Mathematics Teacher',
      qualification: 'M.Sc. Mathematics',
      experience: '12+ Years',
      image: '/image/FAC5.png'
    },
    {
      id: 6,
      name: 'Ram Naresh Singh',
      position: 'Hindi Teacher',
      qualification: 'M.A. Hindi',
      experience: '12+ Years',
      image: '/image/FAC18.png'
    },
    {
      id: 7,
      name: 'Anjali Verma',
      position: 'Social Studies Teacher',
      qualification: 'M.A. History',
      experience: '10+ Years',
      image: '/image/FAC7.png'
    },
    {
      id: 8,
      name: 'Vikram Singh',
      position: 'Computer Science Teacher',
      qualification: 'B.Tech. IT',
      experience: '8+ Years',
      image: '/image/FAC8.png'
    },
  ];

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="faculty-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="faculty-hero-content"
          >
            <h1>Meet Our Faculty</h1>
            <p>Dedicated Educators Shaping Future Leaders</p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-section">
        <div className="container py-5">
          <div className="row">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="col-lg-3 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="faculty-card text-center p-4 shadow rounded">
                  <div className="faculty-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/image/FAC1.png';
                      }}
                    />
                  </div>
                  <h5 className="mb-2">{member.name}</h5>
                  <h6 className="text-primary mb-2">{member.position}</h6>
                  <p className="text-muted mb-1">
                    <strong>Qualification:</strong> {member.qualification}
                  </p>
                  <p className="text-muted mb-0">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                  <div className="faculty-social mt-3">
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
