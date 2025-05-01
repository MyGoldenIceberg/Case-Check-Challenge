# Casecheck Challenge - Query String to Nested Object

This project is a solution to the Casecheck coding challenge that involves converting a URL query string into a deeply nested object based on dot notation in the keys.

## 🧩 The Challenge

Convert a URL query string like this:

```
user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
```

Into the following nested object:

```ts
{
  user: {
    name: {
      firstname: 'Bob',
      lastname: 'Smith'
    },
    favoritecolor: 'Light Blue'
  }
}
```

The query parameters are dot-notated keys that should be split and inserted correctly into a nested object structure. All values are strings and should remain as strings. The solution also requires proper URI decoding of query values.

---

## 🛠 Tech Stack

- **Language**: TypeScript
- **Framework**: [NestJS](https://nestjs.com/)
- **Structure**: Follows NestJS modular architecture with controller, service, and module layers.

---

## 🚀 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/MyGoldenIceberg/Case-Check-Challenge.git
   cd case-check-challenge
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   npm run start:dev
   ```

4. **Run tests**

   ```bash
   npm run test
   ```

---

## 🧪 Usage

You can test the conversion by calling the `convertQueryToMap()` method available in the `QueryService`. It accepts a URL query string and returns a nested object.

Example:
```ts
const query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';
const result = queryService.convertQueryToMap(query);
```

---

## 📁 Project Structure

```
src/
├── query/
│   ├── query.controller.ts      # HTTP controller (if needed)
│   ├── query.module.ts          # Query module registration
│   ├── query.service.ts         # Core logic for query parsing
├── app.controller.ts
├── app.module.ts
├── main.ts                      # Application entry point
```

---

## 👤 Author

**Daniel Holmes**