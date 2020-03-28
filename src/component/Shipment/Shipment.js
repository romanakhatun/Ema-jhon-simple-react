import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    const auth = useAuth();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="error">
                {
                    errors.name && <span>Nmae is required</span>
                }
            </div>
            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} />
            <br />

            {/* Email */}
            <div className="error">
                {
                    errors.email && <span>Email is required</span>
                }
            </div>
            <br />
            <input name="email" ref={register({ required: true })} placeholder="Email" />
            <br />
            {/* Address */}
            <div className="error">
                {
                    errors.Address1 && <span>Address is required</span>
                }
            </div>
            <br />
            <input name="Address1" ref={register} placeholder="Address1" />
            <br />
            <input name="Address2" ref={register({ required: true })} placeholder="Address2" />
            <br />
            <div className="error">
                {
                    errors.country && <span>Country is required</span>
                }
            </div>
            <br />
            <input name="country" ref={register({ required: true })} placeholder="Your Country" />
            <br />

            <div className="error">
                {
                    errors.zipcode && <span>Zip Code is required</span>
                }
            </div>
            <br />
            <input name="zipcode" ref={register({ required: true })} placeholder="Zip code" />
            <br />
            <input type="submit" /><br /><br />
        </form>
    )
};

export default Shipment;