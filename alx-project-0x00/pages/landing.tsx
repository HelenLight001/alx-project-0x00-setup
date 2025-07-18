// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      <Card />

      <div className="mt-8 flex flex-col gap-4">
        {/* Small Rounded-sm Button */}
        {/* <Button title="Small Button" styles="text-sm rounded-sm px-2 py-1" /> */}

        {/* Medium Rounded-md Button */}
        <Button
          title="Button"
          styles="text-md rounded-md px-4 py-2 cursor-pointer"
        />

        {/* Large Rounded-full Button */}
        {/* <Button title="Large Button" styles="text-lg rounded-full px-6 py-3" /> */}
      </div>
    </div>
  );
};

export default Landing;
