---
sidebar_label: System Design
sidebar_position: 4
---

# System Design for Service-Based Companies

> Mostly for experienced hires (1–3 years+). Focus on **scalable architecture** and **practical solutions**.

# System Design Key Terms & Concepts

> Ready-to-read glossary for **service-based system design interviews**.  
> Use this to quickly revise **basic terms and concepts** before your interview.

---

## 🔑 Key Terms

| Term | Simple Explanation |
|------|------------------|
| **Downtime** | Time when the system is unavailable. Keep downtime minimal. |
| **Uptime / Availability** | Percentage of time the system is operational (e.g., 99.9% uptime). |
| **Reliability** | How consistently a system performs without errors. |
| **Scalability** | Ability to handle more users or requests by adding resources. |
| **Vertical Scaling** | Adding more power to a single server (CPU, RAM). |
| **Horizontal Scaling** | Adding more servers to share the load. |
| **Latency** | Time it takes for the system to respond to a request. |
| **Throughput** | Number of requests handled per second by the system. |
| **Load Balancer** | Distributes incoming requests to multiple servers evenly. |
| **Caching** | Storing frequently used data in memory for faster access. |
| **Replication** | Making copies of data on multiple servers for reliability. |
| **Sharding** | Splitting a large database into smaller parts for better performance. |
| **Fault Tolerance** | System keeps working even if some components fail. |
| **Microservices** | Breaking system into small independent services for each function. |
| **Database Index** | Helps find data faster, like an index in a book. |
| **API** | Interface for clients to interact with a server (GET, POST, PUT, DELETE). |
| **CRUD Operations** | Basic database operations: Create, Read, Update, Delete. |
| **Concurrency** | Handling multiple tasks or users at the same time. |
| **Queue** | Data structure to manage requests in order (FIFO). |
| **CDN (Content Delivery Network)** | Network of servers that deliver content faster by location. |
| **Load Shedding** | Dropping some requests when system is overloaded to stay functional. |
| **Consistency** | Data is the same across all parts of the system at any time. |
| **Partition Tolerance** | System continues to operate even if some servers can’t communicate. |
| **CAP Theorem** | A system can have only **2 of 3**: Consistency, Availability, Partition tolerance. |
| **Replication Lag** | Delay between updating main DB and replicas. |
| **Queue vs Stack** | Queue = FIFO (First In First Out), Stack = LIFO (Last In First Out). |

---

## 📚 Topics to Cover

### 1. Database Basics
- **Tables & Relations** – Store data in rows and columns.  
- **Primary / Foreign Keys** – Unique identifiers and references between tables.  
- **Indexing** – Speed up searches.  
- **ACID Properties** – Ensure data is consistent and reliable.  

### 2. API & Endpoints
- **REST API** – Standard way for systems to communicate.  
- **HTTP Methods** – GET (read), POST (create), PUT (update), DELETE (remove).  
- **Request/Response Format** – Usually JSON.  

### 3. Caching
- **Why** – Reduce latency, increase performance.  
- **Where** – Memory (Redis / Memcached), client-side cache.  

### 4. Load Balancing
- **Purpose** – Distribute traffic evenly across servers.  
- **Types** – Round-robin, least connections, IP hash.  

### 5. High-Level Architecture
- **Flow** – User → API → Server → Database → Response.  
- **Diagram** – Show components & connections; no need for deep details.  

### 6. Reliability & Availability
- **Replication** – Keep copies of data on multiple servers.  
- **Backups** – Periodically save data for recovery.  
- **Failover** – Automatically switch to a backup server if main fails.  

### 7. Scalability & Performance
- **Vertical vs Horizontal Scaling** – Add power vs add servers.  
- **Partitioning / Sharding** – Divide data for faster access.  
- **Caching & CDN** – Reduce latency and load.  

### 8. Concurrency & Queues
- **Concurrent Users** – Multiple users using the system simultaneously.  
- **Queue** – Helps process requests in order (e.g., ticketing, notifications).  

---

# Service-Based System Design Examples

> Practical examples of **high-level system design** questions for service-based company interviews.  
> Focus on simple diagrams, component flow, and explanation of each part.

---

## 1️⃣ Library Management System

**Scenario:** A system to manage books, users, and borrowing/returning books.  

**Components & Flow:**  

User → API Server → Application Logic → Database (Books, Users, Transactions)

**Explanation:**  
- **API Server:** Receives requests (search books, borrow, return)  
- **Application Logic:** Handles validation, business rules  
- **Database:** Stores books, users, and transaction history  
- **Caching (optional):** Frequently searched books can be cached for faster access  

**Tips:**  
- Focus on **CRUD operations**  
- Show understanding of **book availability check**  
- Mention **basic scaling ideas** like caching popular books  

---

## 2️⃣ Simple Food Ordering System

**Scenario:** Customers browse menu, place orders, track delivery.  

**High-Level Flow:**  

Customer → Web/App → API → Order Service → Restaurant DB → Notification Service → Delivery Tracking


**Explanation:**  
- **Order Service:** Processes orders and updates DB  
- **Notification Service:** Sends order confirmations  
- **Delivery Tracking:** Updates order status in real-time  
- **Database:** Stores menu, orders, users, and delivery info  

**Tips:**  
- Explain **order flow from request to delivery**  
- Mention **basic scalability** (e.g., caching menu, multiple order servers)  
- Highlight **availability** (system should handle multiple simultaneous orders)  

---

## 3️⃣ URL Shortener

**Scenario:** Shorten long URLs and redirect users.  

**Components:**  

User → API → Short URL Service → Database (URL mappings) → Redirect


**Explanation:**  
- **Short URL Service:** Generates unique short codes  
- **Database:** Stores mappings from short → long URLs  
- **Redirect Service:** Resolves short URLs to original URLs  

**Tips:**  
- Discuss **unique key generation** (hashing or base62 encoding)  
- Mention **basic reliability** (replication to avoid data loss)  
- Optional: caching popular URLs for faster redirect  

---

## 4️⃣ Simple Chat Application

**Scenario:** Real-time chat between users with message history.  

**High-Level Flow:**  

User → Web/App → API Server → Chat Service → Database (Messages) → Real-time Service (WebSocket)


**Explanation:**  
- **Chat Service:** Handles storing and fetching messages  
- **Database:** Stores message history and metadata  
- **Real-time Service:** Pushes messages instantly via WebSocket or polling  
- **Caching (optional):** Recent messages cached for faster retrieval  

**Tips:**  
- Show understanding of **message flow & real-time updates**  
- Mention **reliability** (ensure messages aren’t lost)  
- Highlight **simple scalability** (multiple chat servers for high load)  

--- 

## ✅ Quick Tips for Service-Based System Design

- Keep **diagrams simple**: Users → API → Server → DB  
- Focus on **your past projects**: be ready to explain flow, API, and DB design  
- Use **system design terms** naturally in explanations  
- Highlight **basic scalability ideas** if asked  
- No need for advanced distributed systems knowledge for freshers

> 🎯 Goal: Demonstrate **clear understanding of system flow, components, and basic design principles**. No need for deep distributed system concepts.  

> 🔹 Service-based companies often expect **clarity and practicality** rather than advanced algorithms.

---

## 📚 References & Further Reading

> Curated resources to strengthen your system design knowledge, even for service-based interviews.

---

## 📚 Free & Essential System Design References

> These resources are **enough** to prepare system design for **service-based company interviews**.

### 🌐 Articles & Reading (Must-Read)

- **System Design Roadmap**  
  https://roadmap.sh/system-design  
  👉 Structured path showing *what to learn and in what order*.

- **Awesome System Design Resources (GitHub)**  
  https://github.com/ashishps1/awesome-system-design-resources  
  👉 One place for diagrams, explanations, and examples.

### 🎥 Video Learning (Free & Clear)
- [ByteByteGo-System design](https://www.youtube.com/@ByteByteGo/videos)  
  👉 Visual explanations of scalability, databases, caching, and APIs.

- [System Design - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Simple breakdowns of real interview system design problems.

---

> ⭐ **Interview Tip**  
> If you understand **APIs, Databases, Caching, Load Balancing, Scalability, and Reliability** from these resources,  
> you are **more than ready** for service-based system design rounds.


