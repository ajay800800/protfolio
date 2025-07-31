import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'white' }}>
      {/* Super AI Agent Router */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">Super AI Agent Router</h2>
        <div className="text-center mb-4">
          <img
            src="file2.png"
            alt="Super AI Agent Architecture"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>
        <p className="lead">
          This is a modular and intelligent AI agent router that orchestrates multiple domain-specific agents (e.g., PDF reader,
          hospital appointment agent, email assistant, and code generator) behind a single interface. It uses a large language
          model (LLM) to interpret user queries, choose relevant tools, and route the task accordingly.
        </p>
        <ul className="mt-4 mb-4">
          <li>🧠 <strong>LLM-based tool router</strong> using Mistral/Ollama for intelligent tool selection</li>
          <li>🗂️ <strong>Supports multiple tools:</strong> doctor booking, PDF QA, email sending, code generation</li>
          <li>⚙️ <strong>Extensible JSON output format</strong> for invoking tools with reasoning trace</li>
          <li>🔗 <strong>Plug-and-play architecture</strong> — new tools can be added with minimal effort</li>
          <li>💬 <strong>Frontend built in React</strong> with Bard-like UI for smooth interaction</li>
        </ul>
        <p className="mb-3">
          🔗 <strong>GitHub Repo:</strong>{' '}
          <a href="https://github.com/ajay800800/super-ai-agent" target="_blank" rel="noreferrer">
            github.com/ajay800800/super-ai-agent
          </a>
        </p>
      </div>

      {/* LLM From Scratch */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">LLM from Scratch – GPT-style Transformer</h2>
        <p className="lead">
          Implemented a full GPT-style transformer model using PyTorch including self-attention, tokenization, training loop and evaluation.
        </p>
        <ul className="mt-4 mb-4">
          <li>🧠 Transformer architecture with embeddings + positional encoding</li>
          <li>📚 Trained on WikiText-2</li>
          <li>📊 BLEU score: 0.31</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay900900" target="_blank" rel="noreferrer">ajay900900</a></p>
      </div>

      {/* Doctor Appointment AI Agent */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">Doctor Appointment AI Agent</h2>
        <p className="lead">
          An intelligent healthcare chatbot for getting medical advice and booking appointments. It uses an LLM to understand
          user input and trigger backend workflows.
        </p>
        <ul className="mt-4 mb-4">
          <li>🩺 Doctor search and filtering</li>
          <li>📅 Real-time appointment scheduling</li>
          <li>🔁 Agentic planning and action pipeline</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay800800/doc_mcp" target="_blank" rel="noreferrer">doc_mcp</a></p>
      </div>

      {/* Lang Translator */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">AI4Bharat Lang Translator (Text + Speech)</h2>
        <p className="lead">
          Local translation and transcription using IndicTrans2 + IndicWhisper to support 20+ Indian languages.
        </p>
        <ul className="mt-4 mb-4">
          <li>🎙️ Voice to text using Whisper</li>
          <li>🌐 Text translation using IndicTrans2</li>
          <li>🧠 Fully offline execution</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay800800/lang_translator" target="_blank" rel="noreferrer">lang_translator</a></p>
      </div>

      {/* Autocoder */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">Autocoder – Python Coding Agent</h2>
        <p className="lead">
          Python code generator agent using LLM + retry logic. Generates runnable code files and fixes errors across attempts.
        </p>
        <ul className="mt-4 mb-4">
          <li>💡 Prompt-based generation</li>
          <li>❌ Auto error retries</li>
          <li>📂 Code saved and executed automatically</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay800800/codin_agent" target="_blank" rel="noreferrer">codin_agent</a></p>
      </div>

      {/* Email Agent */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">Smart Email Agent</h2>
        <p className="lead">
          Generates and sends emails using Gmail SMTP and a local LLM to structure content based on user prompts.
        </p>
        <ul className="mt-4 mb-4">
          <li>📧 GPT-powered email authoring</li>
          <li>📅 Supports scheduling + smart summaries</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay800800/EMAIL_AGENT" target="_blank" rel="noreferrer">EMAIL_AGENT</a></p>
      </div>

      {/* Load Balancer */}
      <div className="container project-box mt-5">
        <h2 className="mb-4 text-center">Distributed Load Balancer with Sharding & Fault Tolerance</h2>
        <p className="lead">
          A Flask-based scalable system with leader election, replication, and sharded storage to support fault-tolerant load routing.
        </p>
        <ul className="mt-4 mb-4">
          <li>🧠 Consistent hashing</li>
          <li>🔁 Log sync + failover</li>
          <li>🔐 Two-stage locking</li>
        </ul>
        <p>🔗 GitHub: <a href="https://github.com/ajay900900/load_balancer" target="_blank" rel="noreferrer">load_balancer</a></p>
      </div>
    </section>
  );
}
