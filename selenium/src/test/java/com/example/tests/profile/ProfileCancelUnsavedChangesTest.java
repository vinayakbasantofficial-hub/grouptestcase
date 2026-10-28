package com.example.tests.profile;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify cancelling edits keeps the original profile values.
 * Expected result: The UI displays the expected result indicator.
 */
class ProfileCancelUnsavedChangesTest {
    @Test
    void profileCancelUnsavedChanges() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/profile");
            driver.findElement(By.cssSelector("[data-testid='cancel-profile-changes']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='original-profile-values']")));
        } finally {
            driver.quit();
        }
    }
}
