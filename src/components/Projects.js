import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'white' }}>
     <div className="container project-box mt-5">
  <h2 className="mb-4 text-center">Super AI Agent Router</h2>

  <div className="text-center mb-4">
    <img
      src="/assets/file2.png"
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
       
      <div className="container project-box">
        <h2 className="mb-4 text-center">Doctor Appointment AI Agent</h2>

        <p className="lead">
          <strong>Doctor AI Agent</strong> is an intelligent healthcare chatbot that allows users to get medical advice
          and book doctor appointments via a conversational interface. It combines the power of large language models
          with real-time backend APIs to create a seamless and useful medical assistant experience.
        </p>

        <p>
          This project was developed with a modular, agentic mindset. The AI doesn’t just chat — it reasons about user
          intent, plans actions like searching for doctors or checking availability, and autonomously executes them
          through API calls. This mirrors the architecture of Agentic AI frameworks (like AIMCP) where agents
          perceive, plan, and act — making it extensible, explainable, and future-proof.
        </p>

        <ul className="mt-4 mb-4">
          <li>👨‍⚕️ <strong>Doctor directory</strong> with specialties and profile filtering</li>
          <li>📅 <strong>Time slot selection</strong> and real-time appointment booking</li>
          <li>📡 <strong>Live backend</strong> built with Node.js + Express REST API</li>
          <li>🧠 <strong>Agentic AI loop</strong> to interpret intent and trigger backend operations</li>
          <li>🔄 <strong>Extensible architecture</strong> (e.g., for future lab test integration or calendar sync)</li>
        </ul>

        <p className="mb-3">
          🔗 <strong>Live App:</strong>{' '}
          <a href="https://doc-mcp-1.onrender.com" target="_blank" rel="noreferrer">
            doc-mcp-1.onrender.com
          </a>
        </p>
          <p className="mt-4">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay800800/doc_mcp" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </p>
        // <div className="video-wrapper">
        //   <iframe
        //     src="https://www.youtube.com/embed/ebc0WeVGHDM"
        //     title="Doctor AI Agent Demo"
        //     allowFullScreen
        //   ></iframe>
        // </div>
      </div>
      <div className="container project-box mt-5">
  <h2 className="mb-4 text-center">Distributed Load Balancer with Sharding & Fault Tolerance</h2>

  <p className="lead">
    This project is a high-performance, fault-tolerant distributed load balancer built with <strong>Flask</strong> and <strong>Python</strong>. 
    It features intelligent sharding, automatic leader election, log replication, and two-stage locking to ensure data consistency 
    and efficient routing under heavy load.
  </p>

  <ul className="mt-4 mb-4">
    <li>🧠 <strong>Sharding Engine</strong> using consistent hashing and shard-server mapping</li>
    <li>🗂 <strong>Server Manager</strong> with CRUD ops, server map tracking, and failover support</li>
    <li>🔐 <strong>Two-Stage Locking</strong> for write consistency at global + shard levels</li>
    <li>⚡ <strong>In-memory load balancing</strong> via Python dictionaries for low-latency reads</li>
    <li>🔁 <strong>Log Replication</strong> between primary and secondary replicas</li>
    <li>⚙️ <strong>Leader Election</strong> and dynamic server spawning with state restoration</li>
  </ul>

  <p><strong>Tech Stack:</strong> Python, Flask, Docker, Make, SQL/NoSQL abstraction</p>

  <p className="mt-4"><strong>Performance Benchmark:</strong></p>
  <ul>
    <li>6 Servers, 4 Shards, 3 Replicas → 📈 Read: 105/s | ✍️ Write: 29/s</li>
    <li>6 Servers, 4 Shards, 6 Replicas → 📈 Read: 138/s | ✍️ Write: 19/s</li>
    <li>10 Servers, 6 Shards, 8 Replicas → 📈 Read: 145/s | ✍️ Write: 17/s</li>
  </ul>

  <p className="mt-4">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay900900/load_balancer" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </p>
</div>
      <div className="container project-box mt-5">
  <h2 className="mb-4 text-center">AI4Bharat Lang Translator (Text + Speech)</h2>

  // <div className="text-center mb-4">
  //   <img
  //     src="/assets/lang-translator-ui.png"
  //     alt="Lang Translator UI"
  //     style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
  //   />
  // </div>

  <p className="lead">
    This app uses AI4Bharat’s open-source IndicTrans2 and IndicWhisper models to translate text or speech from 20+ Indian
    languages into English. The backend runs Hugging Face-compatible models locally.
  </p>

  <ul className="mt-4 mb-4">
    <li>🎙️ <strong>Voice-to-Text</strong> using AI4Bharat Whisper</li>
    <li>🌐 <strong>Text Translation</strong> using AI4Bharat IndicTrans2</li>
    <li>🖥️ Runs fully offline with no API calls</li>
    <li>🧪 Built using Node.js, Python backend, and React frontend</li>
    <li>📤 Image + audio upload support</li>
  </ul>

  <p className="mb-3">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay800800/lang_translator" target="_blank" rel="noreferrer">
      github.com/ajay800800/lang_translator
    </a>
  </p>
</div>

<div className="container project-box mt-5">
  <h2 className="mb-4 text-center">LLM from Scratch – GPT-style Transformer</h2>

  <p className="lead">
    This project involved designing and implementing a GPT-style language model <strong>from scratch</strong> using PyTorch, complete with self-attention, positional encoding, and a custom training pipeline for domain-specific data.
  </p>

  <ul className="mt-4 mb-4">
    <li>🧠 Implemented full transformer architecture with self-attention & embeddings</li>
    <li>📚 Trained on WikiText-2 with <strong>BLEU score: 0.31</strong> for natural text generation</li>
    <li>🧪 Optimized using <strong>AdamW</strong>, <strong>ExponentialLR</strong>, and <strong>checkpointing</strong></li>
    <li>🔤 Built custom tokenizer with support for downstream tasks like QA and RAG</li>
  </ul>

  <p className="mb-3">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay900900" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </p>
</div>
      <div className="container project-box mt-5">
  <h2 className="mb-4 text-center">Autocoder – Python Coding Agent</h2>

  <div className="text-center mb-4">
    <img
      src="/assets/autocoder-ui.png"
      alt="Autocoder UI"
      style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    />
  </div>

  <p className="lead">
    Autocoder is a powerful LLM-based coding agent that takes a prompt and generates correct Python code using an
    iterative retry mechanism. It saves generated files, executes them, captures output/errors, and updates based on
    failure reasoning.
  </p>

  <ul className="mt-4 mb-4">
    <li>💡 Prompt-driven Python code generation</li>
    <li>🧠 Automatic error handling and retries (max 5 attempts)</li>
    <li>📁 Saves every attempt to a file</li>
    <li>🧪 Includes runner agent to evaluate output in real time</li>
    <li>🖼️ UI + API for both CLI and Flask frontend</li>
  </ul>

  <p className="mb-3">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay800800/codin_agent" target="_blank" rel="noreferrer">
      github.com/ajay800800/codin_agent
    </a>
  </p>
</div>
<div className="container project-box mt-5">
  <h2 className="mb-4 text-center">Smart Email Agent</h2>

  // <div className="text-center mb-4">
  //   // <img
    
  //   //   alt="Email Agent UI"
  //   //   style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
  //   // />
  // </div>

  <p className="lead">
    This AI agent generates and sends emails using Gmail SMTP based on user input. Powered by a local LLM (Mistral),
    it can turn conversational prompts like “email my doctor tomorrow” into actual scheduled emails.
  </p>

  <ul className="mt-4 mb-4">
    <li>📧 Smart email generation using LLM</li>
    <li>⚙️ Send via Gmail SMTP</li>
    <li>📆 Supports scheduling, summaries, and custom templates</li>
    <li>🔒 Secure handling of credentials with dotenv</li>
    <li>🧠 Can be used standalone or routed via Super AI Router</li>
  </ul>

  <p className="mb-3">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay800800/EMAIL_AGENT" target="_blank" rel="noreferrer">
      github.com/ajay800800/EMAIL_AGENT
    </a>
  </p>
</div>

<div className="container project-box mt-5">
  <h2 className="mb-4 text-center">Next-Location Prediction Using Fine-Tuned LLMs</h2>

  <p className="lead">
    Developed a predictive model using transformer-based LLMs to forecast human mobility patterns from GPS trajectory data. 
    Fine-tuned multiple LLMs for sequential location modeling.
  </p>

  <ul className="mt-4 mb-4">
    <li>📍 Fine-tuned <strong>GPT-2, Mistral-7B, and LLaMA-2</strong> on 78K+ mobility sequences</li>
    <li>📈 Achieved accuracy of 17% (GPT-2), 27% (Mistral), and 28% (LLaMA-2)</li>
    <li>🔄 Built robust pipeline to preprocess and encode geolocation into model-friendly format</li>
    <li>🧠 Applied transformers to spatiotemporal sequence modeling with strong generalization</li>
  </ul>

  <p className="mb-3">
    🔗 <strong>GitHub Repo:</strong>{' '}
    <a href="https://github.com/ajay900900" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </p>
</div>


    </section>
    
  );
}
