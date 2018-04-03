
import React from 'react';
import './style.css';
import { Button, FormField, Panel, TextBox, RadioButtons, RadioButton, StatusTracker  } from '@veneer/core';

class Neworder extends React.Component {
    render() {
      return (
        <div>
        <Panel title="User Details" className="undefined" contentClassName="undefined">
            <FormField label="1. Breakdown of MOBILE and FIXED LOCATION users:" id="formfield-id">
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                        label="Mobile Users"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                    <RadioButton
                        label="Fixed Location Users"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                </RadioButtons>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of Users" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

            <FormField label="2. Display Usge among Users (how many displays does each user have)" id="formfield-id">
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                        label="1 or 2 Displays"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                    <RadioButton
                        label="3 or more displays"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                </RadioButtons>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of displays for each user" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

            <FormField label="3. Breakdown of MOBILE and FIXED LOCATION users:" id="formfield-id">
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                        label="Camera"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                    <RadioButton
                        label="Scanner"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Other"
                        index={2}
                        onChange="undefined"
                        value="undefined" />
                </RadioButtons>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="Placeholder" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

            <FormField label="4. Breakdown of MOBILE and FIXED LOCATION users:" id="formfield-id">
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                        label="Yes"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                    <RadioButton
                        label="No"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                </RadioButtons>
            </FormField>

            <FormField label="5. Understanding the Software used by your Users" id="formfield-id">
                <div style={{width: "300px"}}>
                    <RadioButtons name="radiobutton_label" id="radio-group-id">
                        <RadioButton
                        label="Microsoft Office 365 Subscriptions"
                        id="radio-item1-id"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Microsoft Office (Other version)"
                        id="radio-item2-id"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Adobe Reader"
                        id="radio-item3-id"
                        index={2}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Google G-Suite applications"
                        id="radio-item4-id"
                        index={3}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Voice over IP (VOIP) Solution"
                        id="radio-item5-id"
                        index={4}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Other Standard Business Software"
                        id="radio-item6-id"
                        index={5}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Custom Developed Software"
                        id="radio-item7-id"
                        index={6}
                        onChange="undefined"
                        value="undefined" />
                    </RadioButtons>
                </div>
                <FormField label="How many users" id="formfield-id">
                    <div style={{width: "400px"}}>
                        <TextBox placeholder="No of users" name="input_name" maxLength="undefined" />
                    </div>
                </FormField>
            </FormField>
        </Panel>

        <Panel title="Product Details" className="undefined" contentClassName="undefined">
        <FormField label="1. How many users  are you intending to  provide with Cloud PC ?" id="formfield-id">
                <div style={{width: "400px"}}>
                    <TextBox placeholder="no of users to provide with Cloud Pc" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

            <FormField label="2. How are your PRINTERS supported" id="formfield-id">
            <div style={{width: "600px"}}>
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                        label="User has a printer connected to their PC"
                        index={0}
                        onChange="undefined"
                        value="undefined" />
                    <RadioButton
                        label="Users connect to printers on the local network"
                        index={1}
                        onChange="undefined"
                        value="undefined" />
                        <RadioButton
                        label="Users use E-Print services"
                        index={2}
                        onChange="undefined"
                        value="undefined" />
                </RadioButtons>
            </div>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="Placeholder" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

             <FormField label="3. Do any of your peripherals require a Serial Port" id="formfield-id">
                <RadioButtons name="radiobutton_label" id="radio-group-id">
                    <RadioButton
                    label="Yes"
                    index={0}
                    onChange="undefined"
                    value="undefined" />
                    <RadioButton
                    label="No"
                    index={1}
                    onChange="undefined"
                    value="undefined" />
                </RadioButtons>
            </FormField>

        </Panel>

        <div className="vn-button-group--horizontal" style={{float: "right", marginTop:"10"}}>
            <Button appearance="undefined" className="undefined">
                Save Order
            </Button>
            <Button appearance="secondary" className="undefined">
                Cancel
            </Button>
        </div>
    </div>
      );
    }
  }

export default Neworder;