package com.example.tests.auth;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify a valid verification token confirms the email address.
 * Expected result: The UI displays the expected result indicator.
 */
class AuthVerifyEmailAddressTest {
    @Test
    void authVerifyEmailAddress() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/verify-email");
            driver.findElement(By.cssSelector("[data-testid='verify-valid-token']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='email-verified']")));
        } finally {
            driver.quit();
        }
    }
}
