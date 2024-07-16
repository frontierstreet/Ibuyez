import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-top: 50px;
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
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 3px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #333;
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

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const renderFormInput = (label, name, type = 'text', value) => (
        <FormGroup key={name}>
            <FormLabel>{label}:</FormLabel>
            <FormInput type={type} name={name} value={value} onChange={handleChange} required />
        </FormGroup>
    );

    const formSteps = [
        {
            title: 'Step 1: Personal Information',
            fields: [
                { label: 'Name', name: 'name' },
                { label: 'Street Address', name: 'streetAddress' },
                { label: 'City', name: 'city' },
                { label: 'State', name: 'state' },
                { label: 'Zip Code', name: 'zipCode' },
            ],
            buttons: [
                { label: 'Next', action: nextStep },
            ],
        },
        {
            title: 'Step 2: Contact Information',
            fields: [
                { label: 'Phone Number', name: 'phoneNumber' },
                { label: 'Email', name: 'email', type: 'email' },
            ],
            buttons: [
                { label: 'Previous', action: prevStep },
                { label: 'Next', action: nextStep },
            ],
        },
        {
            title: 'Step 3: Selling Details',
            fields: [
                { label: 'Considered Selling Duration', name: 'consideredSellingDuration' },
                {
                    label: 'Reasons to Sell', name: 'reasonsToSell', type: 'checkbox',
                    options: [
                        'For Sale By Owner', 'Vacant property', 'Divorce', 'Pre foreclosure',
                        'Death in the family', 'Relocation', 'A tired landlord', 'Inherited property'
                    ]
                },
                { label: 'Selling Timeframe', name: 'sellingTimeframe' },
                { label: 'Asking Price', name: 'askingPrice', type: 'number' },
            ],
            buttons: [
                { label: 'Previous', action: prevStep },
                { label: 'Submit', action: handleSubmit, isSubmit: true },
            ],
        },
    ];

    const renderFormStep = () => {
        const step = formSteps[currentStep - 1];
        return (
            <form onSubmit={handleSubmit}>
                <h2>{step.title}</h2>
                {step.fields.map(field => (
                    field.type === 'checkbox'
                        ? field.options.map(option => (
                            <FormCheckboxLabel key={option}>
                                <input
                                    type="checkbox"
                                    name={field.name}
                                    value={option}
                                    checked={formData.reasonsToSell.includes(option)}
                                    onChange={handleChange}
                                /> {option}
                            </FormCheckboxLabel>
                        ))
                        : renderFormInput(field.label, field.name, field.type, formData[field.name])
                ))}
                <ButtonContainer>
                    {step.buttons.map(button => (
                        <Button
                            key={button.label}
                            type={button.isSubmit ? 'submit' : 'button'}
                            onClick={button.action}
                        >
                            {button.label}
                        </Button>
                    ))}
                </ButtonContainer>
            </form>
        );
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
