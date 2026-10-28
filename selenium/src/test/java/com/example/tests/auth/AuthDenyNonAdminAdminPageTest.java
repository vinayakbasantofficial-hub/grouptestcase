package com.example.tests.auth;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify a regular user is denied administrator page access.
 * Expected result: The UI displays the expected result indicator.
 */
class AuthDenyNonAdminAdminPageTest {
    @Test
    void authDenyNonAdminAdminPage() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/admin");
            driver.findElement(By.cssSelector("[data-testid='access-as-regular-user']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='access-denied']")));
        } finally {
            driver.quit();
        }
    }
}
