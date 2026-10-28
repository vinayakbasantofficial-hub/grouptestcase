package com.example.tests.auth;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify an expired session requires the user to sign in again.
 * Expected result: The UI displays the expected result indicator.
 */
class AuthRejectExpiredSessionTest {
    @Test
    void authRejectExpiredSession() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/account");
            driver.findElement(By.cssSelector("[data-testid='use-expired-session']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='login-page']")));
        } finally {
            driver.quit();
        }
    }
}
