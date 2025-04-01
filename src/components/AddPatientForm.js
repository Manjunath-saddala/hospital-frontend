import React, { useState } from 'react';
import { createPatient } from "../services/PatientService";  
import { useNavigate } from 'react-router-dom';
import "./AddPatientForm.css"; // Importing CSS for styling

const AddPatientForm = () => {
    const navigate = useNavigate();

    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient((prevPatient) => ({
            ...prevPatient,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPatient(patient);
            alert('Patient added successfully!');
            navigate('/'); 
        } catch (error) {
            console.error('Error adding patient:', error);
            alert('Failed to add patient. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add New Patient</h2>
            <form onSubmit={handleSubmit} className="patient-form">
                <div className="form-grid">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={patient.firstName}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={patient.lastName}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={patient.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={patient.phone}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={patient.age}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={patient.gender}
                            onChange={handleChange}
                            required
                            className="form-input"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label>Address:</label>
                        <textarea
                            name="address"
                            value={patient.address}
                            onChange={handleChange}
                            required
                            className="form-input textarea"
                        />
                    </div>
                </div>

                <div className="button-container">
                    <button type="submit" className="submit-button">
                        Add Patient
                    </button>
                    <button type="button" onClick={() => navigate('/')} className="cancel-button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPatientForm;
