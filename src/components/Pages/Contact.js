import React,{Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields={
    sections: [
        [
            {name:'name',elementName:'input',type:'text',placeholder:'Your Name *'},
            {name:'email',elementName:'input',type:'email',placeholder:'Your Email *'},
            {name:'phone',elementName:'input',type:'text',placeholder:'Your Phone *'}
        ],
        [
            {name:'message',elementName:'textarea',type:'text',placeholder:'Your Message *'}
        ]
    ]
}
class Contact extends Component{
    
    submitForm=(e)=>{
        alert("Form Submitted Successfully");
    }
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                        <div className="row">
                            {fields.sections.map((section,index)=>{
                                return(
                                    <div className="col-md-6" key={index}>
                                        {section.map((field,i)=>{
                                            return <Field {...field} key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>
                                )
                            })}
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
          </section>
        
        )
    }
}
export default withFormik({
    mapPropsToValues:()=>({
       name:'',
       email:'',
       phone:'',
       message:'', 
    }),
    validationSchema: Yup.object().shape({
        name:Yup.string().min(3,'Come on bro,your name is longer than that').required('You must give us your name.'),
        email:Yup.string().email('You need to give us a valid email').required('We need your email'),
        phone:Yup.string().min(11,'phone no must be at least 11 character').max(15,'Your Phone no is too long').required('You must provide your phone no'),
        message:Yup.string().min(500,'You nedd to provide us more detailed information').required('Message is required')
    }),
    handleSubmit:(values,{setSubmitting})=>{
        alert("You've Submitted the form");
    }
})(Contact);