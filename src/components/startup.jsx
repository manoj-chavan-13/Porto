import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <div className="mt-6">
          <p className="text-gray-600">
            © 2024 Minta. All rights reserved. |{" "}
            <a
              href="https://minta.in"
              className="text-blue-500 hover:underline"
            >
              Visit Minta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
