package com.example.tests.auth;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify registration rejects an already registered email.
 * Expected result: The UI displays the expected result indicator.
 */
class AuthRegisterDuplicateEmailTest {
    @Test
    void authRegisterDuplicateEmail() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/register");
            driver.findElement(By.cssSelector("[data-testid='register-existing-email']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='registration-error']")));
        } finally {
            driver.quit();
        }
    }
}
