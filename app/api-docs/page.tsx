"use client";

import ContentPage from "@/components/ContentPage";

export default function ApiPage() {
    return (
        <ContentPage
            title="API Reference"
            subtitle="Build powerful integrations with our REST API."
        >
            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto text-left font-mono text-sm shadow-xl max-w-4xl mx-auto">
                <div className="text-green-400 mb-2">// Example Request</div>
                <div className="text-white">
                    <span className="text-purple-400">GET</span> <span className="text-yellow-300">https://api.viroxcloud.com/v1/users</span>
                </div>
                <div className="text-slate-500 mt-4 mb-2">Authorization: Bearer YOUR_API_KEY</div>
                <div className="text-green-400 mt-6 mb-2">// Response</div>
                <pre className="text-slate-300">
                    {`{
  "data": [
    {
      "id": "usr_123",
      "name": "Jane Doe",
      "role": "admin"
    }
  ],
  "meta": {
    "total": 1
  }
}`}
                </pre>
            </div>
        </ContentPage>
    );
}
