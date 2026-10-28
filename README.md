# Grouped UI Test Cases

50 short, descriptive UI tests organized into five real-world features. Each file contains one scenario.

| Feature | Count | Technology | Example filename |
| --- | ---: | --- | --- |
| Payment | 10 | Playwright JavaScript | `payment_declined_card.spec.js` |
| Authorization | 15 | Selenium Java/JUnit 5 | `AuthLoginInvalidPasswordTest.java` |
| Cart | 10 | Playwright JavaScript | `cart_add_product.spec.js` |
| Profile | 10 | Selenium Java/JUnit 5 | `ProfileUpdateDisplayNameTest.java` |
| Search | 5 | Playwright JavaScript | `search_unknown_product.spec.js` |

**Convention:** Playwright uses `<feature>_<real_world_behavior>.spec.js`; Selenium Java uses `<Feature><RealWorldBehavior>Test.java`, inside per-feature folders. No numeric-only filenames.

**Important:** Your repository had no app code. These are example/skeleton UI tests using illustrative paths and `data-testid` selectors; you must adapt them to your app's real UI and test data before they can pass. They are not verified against a running application. Use a **sandbox/mock** payment provider only.

### Run Playwright
```bash
npm install
npx playwright install
BASE_URL=http://localhost:3000 npm run test:playwright
```
### Run Selenium
```bash
cd selenium
mvn test -DbaseUrl=http://localhost:3000
```
Requires JDK 17, Maven, Chrome and a compatible driver managed by Selenium Manager. 
