"use client";
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

export const Newsletter = () => {
    const [message, setMessage] = useState<string | null>(null);
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(
                "https://bareillydeals.com/newsletter.php",
                { email: data.newsletter },
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status === 200) {
                if (response.data === "Email already exists") {
                    setMessage("already_subscribed");
                } else {
                    setMessage("success");
                    setTimeout(() => {
                        setMessage(null);
                        reset();
                    }, 3000);
                }
            } else {
                setMessage("failed");
            }
        } catch (error) {
            setMessage("failed");
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
                <div className='w-full'>
                    <Controller
                        name="newsletter"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="email"
                                className="w-full border-none rounded-[8px_0px_0px_8px] focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] placeholder:text-[16px] text-[16px] px-3"
                                placeholder="Enter Your Email"
                                autoComplete="off"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className='flex w-[50px] h-[51px] rounded-[0px_8px_8px_0px] text-[white] text-3xl justify-center items-center bg-[#141C98]'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <span className="w-[30px] h-[30px] animate-spin rounded-[50%] border-t-[#3498db] border-2 border-solid border-[#f3f3f3]"></span> : <FaLongArrowAltRight />}
                    </button>
                </div>
            </form>
            <div>
                {errors["newsletter"] && <span className="text-red-500 text-sm">Please Enter Your Email</span>}
            </div>
            {message && (
                <div className={`mt-4 ${message === "success" ? "text-green-500" : "text-red-500"}`}>
                    {message === "success" ? "Thanks for subscribing to us." : message === "already_subscribed" ? "You have already subscribed." : "Not Subscribed"}
                </div>
            )}
        </>
    );
};
