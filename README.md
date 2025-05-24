Creational Pattern 
  -  Creational design patterns in object-oriented programming address how objects are created, focusing on providing flexible and efficient object creation mechanisms.
  -  They abstract the instantiation process, allowing a system to be independent of how its objects are created, composed, and represented.
  -  This independence promotes code reuse, flexibility, and maintainability.
    - Singleton: Need a single instance that's accessible globally like a database connection pool or the logger
      cons: Race condition during instance creation, Need thread-safe implementation
    - Builder: Creating a complex api request (headers, query params, body data)
    - Factory Method
    - Abstract Factory
    - Prototype
Structural Pattern
  - Deal with how objects relate to each other.
  - Think of them as blueprint for building large structures from individual pieces
    - Facade
    - Adapter
    
Behavioral Pattern
  - Handle communication between objects.
  - How they interact and and distribute responsibility.
     - Strategy pattern
     - Observer pattern
