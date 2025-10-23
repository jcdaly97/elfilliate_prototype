import React from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SettingsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const SettingsSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #9d4edd;
    box-shadow: 0 0 0 2px rgba(157, 78, 221, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #9d4edd;
    box-shadow: 0 0 0 2px rgba(157, 78, 221, 0.2);
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: #9d4edd;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #8c32d3;
  }
`;

const Settings: React.FC = () => {
  return (
    <SettingsContainer>
      <h2>Settings</h2>

      <SettingsCard>
        <SettingsSection>
          <SectionTitle>Account Settings</SectionTitle>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" defaultValue="Jane Doe" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" defaultValue="jane@example.com" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" defaultValue="********" />
          </FormGroup>
        </SettingsSection>

        <SettingsSection>
          <SectionTitle>Notification Preferences</SectionTitle>
          <Checkbox>
            <input type="checkbox" id="email-notifications" defaultChecked />
            <label htmlFor="email-notifications">Email notifications</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="sales-alerts" defaultChecked />
            <label htmlFor="sales-alerts">Sales alerts</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="new-products" defaultChecked />
            <label htmlFor="new-products">New product announcements</label>
          </Checkbox>
        </SettingsSection>

        <SettingsSection>
          <SectionTitle>Payment Information</SectionTitle>
          <FormGroup>
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select id="payment-method" defaultValue="paypal">
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
              <option value="venmo">Venmo</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="paypal-email">PayPal Email</Label>
            <Input
              type="email"
              id="paypal-email"
              defaultValue="jane@example.com"
            />
          </FormGroup>
        </SettingsSection>

        <Button>Save Changes</Button>
      </SettingsCard>

      <p>
        This is a placeholder for the Settings page. In a complete
        implementation, this page would include more detailed settings options,
        account management features, and integration with a backend to save user
        preferences.
      </p>
    </SettingsContainer>
  );
};

export default Settings;
