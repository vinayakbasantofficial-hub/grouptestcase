package com.example.tests.profile;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify saving a new display name shows the saved confirmation.
 * Expected result: The UI displays the expected result indicator.
 */
class ProfileUpdateDisplayNameTest {
    @Test
    void profileUpdateDisplayName() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/profile");
            driver.findElement(By.cssSelector("[data-testid='save-display-name']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='profile-saved']")));
        } finally {
            driver.quit();
        }
    }
}
