import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'white' }}>
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
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/ebc0WeVGHDM"
            title="Doctor AI Agent Demo"
            allowFullScreen
          ></iframe>
        </div>
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
