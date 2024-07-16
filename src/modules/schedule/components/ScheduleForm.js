import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 3px;
`;

const FormCheckboxLabel = styled.label`
    display: inline-block;
    margin-right: 10px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const StepForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: '',
        consideredSellingDuration: '',
        reasonsToSell: [],
        sellingTimeframe: '',
        askingPrice: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const updatedReasonsToSell = checked
                ? [...formData.reasonsToSell, value]
                : formData.reasonsToSell.filter(reason => reason !== value);
            setFormData({
                ...formData,
                reasonsToSell: updatedReasonsToSell,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/schedule-form', formData);
            // console.log(formData)
            setResponseMessage('Schedule form submitted successfully.');
            setFormData({
                name: '',
                streetAddress: '',
                city: '',
                state: '',
                zipCode: '',
                phoneNumber: '',
                email: '',
                consideredSellingDuration: '',
                reasonsToSell: [],
                sellingTimeframe: '',
                askingPrice: '',
            });
        } catch (error) {
            setResponseMessage('An error occurred while submitting the form.');
        }
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <form onSubmit={handleSubmit}>
                        <h2>Step 1: Personal Information</h2>
                        <FormGroup>
                            <FormLabel>Name:</FormLabel>
                            <FormInput type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Street Address:</FormLabel>
                            <FormInput type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>City:</FormLabel>
                            <FormInput type="text" name="city" value={formData.city} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>State:</FormLabel>
                            <FormInput type="text" name="state" value={formData.state} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Zip Code:</FormLabel>
                            <FormInput type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                        </FormGroup>
                        <ButtonContainer>
                            <Button type="button" onClick={nextStep}>Next</Button>
                        </ButtonContainer>
                    </form>
                );
            case 2:
                return (
                   <form onSubmit={handleSubmit}>
                        <h2>Step 2: Contact Information</h2>
                        <FormGroup>
                            <FormLabel>Phone Number:</FormLabel>
                            <FormInput type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Email:</FormLabel>
                            <FormInput type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </FormGroup>
                        <ButtonContainer>
                            <Button type="button" onClick={prevStep}>Previous</Button>
                            <Button type="button" onClick={nextStep}>Next</Button>
                        </ButtonContainer>
                    </form>
                );
            case 3:
                return (
                    <form onSubmit={handleSubmit}>
                        <h2>Step 3: Selling Details</h2>
                        <FormGroup>
                            <FormLabel>Considered Selling Duration:</FormLabel>
                            <FormInput type="text" name="consideredSellingDuration" value={formData.consideredSellingDuration} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Reasons to Sell:</FormLabel><br />
                            <FormCheckboxLabel>
                                <input type="checkbox" name="reasonsToSell" value="For Sale By Owner" checked={formData.reasonsToSell.includes('For Sale By Owner')} onChange={handleChange} /> For Sale By Owner
                            </FormCheckboxLabel>
                            <FormCheckboxLabel>
                                <input type="checkbox" name="reasonsToSell" value="Vacant property" checked={formData.reasonsToSell.includes('Vacant property')} onChange={handleChange} /> Vacant property
                            </FormCheckboxLabel>
                            
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Selling Timeframe:</FormLabel>
                            <FormInput type="text" name="sellingTimeframe" value={formData.sellingTimeframe} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Asking Price:</FormLabel>
                            <FormInput type="number" name="askingPrice" value={formData.askingPrice} onChange={handleChange} required />
                        </FormGroup>
                        <ButtonContainer>
                            <Button type="button" onClick={prevStep}>Previous</Button>
                            <Button type="submit">Submit</Button>
                        </ButtonContainer>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <FormContainer>
            <h1>Step Form</h1>
            {renderFormStep()}
            {responseMessage && <p>{responseMessage}</p>}
        </FormContainer>
    );
};

export default StepForm;
