import React from "react";
import { Input, Button, Typography, Textarea } from "@material-tailwind/react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex flex-col">
     <div>
     <Typography variant="h1" className="text-center mb-10 mt-10">
        Contact
      </Typography>
      <div className="max-w-6xl mx-auto w-full flex-1 flex justify-center items-center">
        <div className="md:flex md:items-center md:gap-10 w-full">
          <div className="max-w-lg mx-auto px-6 mb-6 md:flex-1 border-b border-white pb-8 md:border-none md:pb-0">
            <Typography variant="h3" className="text-4xl">
              Got a problem to solve?
            </Typography>
            <Typography
              variant="paragraph"
              className="my-4 dark:text-dark-muted"
            >
              Get in touch with me via social media or email.
            </Typography>
            <div className="flex gap-3 items-center">
              <Mail />
              <span className="text-blue-400">zorosenpai456@gmail.com</span>
            </div>
          </div>

          <form className="max-w-lg mx-auto px-6 md:flex-1">
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                className="-mb-5 dark:text-dark-muted text-sm"
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-gray-900 dark:focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                className="-mb-5 dark:text-dark-muted text-sm"
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-gray-900 dark:focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                className="-mb-5 dark:text-dark-muted text-sm"
              >
                Message
              </Typography>
              <Textarea
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-gray-900 dark:focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button
              className="mt-6 bg-dark-background text-white dark:bg-white dark:text-black"
              fullWidth
            >
              sign up
            </Button>
          </form>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Contact;
