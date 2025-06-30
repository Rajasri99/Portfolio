#!/bin/bash

echo "================================"
echo "   Cosmic Portfolio Setup"
echo "================================"
echo ""
echo "Installing dependencies..."

npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Error installing dependencies!"
    echo "Please make sure Node.js is installed."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "Starting development server..."
echo ""
echo "🚀 Your cosmic portfolio will open at: http://localhost:3000"
echo ""

npm run dev