package com.example.tests.profile;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify an invalid phone number displays a validation error.
 * Expected result: The UI displays the expected result indicator.
 */
class ProfileRejectInvalidPhoneTest {
    @Test
    void profileRejectInvalidPhone() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/profile");
            driver.findElement(By.cssSelector("[data-testid='save-invalid-phone']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='validation-error']")));
        } finally {
            driver.quit();
        }
    }
}
