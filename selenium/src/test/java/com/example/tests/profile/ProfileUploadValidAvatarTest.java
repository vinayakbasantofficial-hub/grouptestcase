package com.example.tests.profile;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify uploading a supported avatar displays a preview.
 * Expected result: The UI displays the expected result indicator.
 */
class ProfileUploadValidAvatarTest {
    @Test
    void profileUploadValidAvatar() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/profile");
            driver.findElement(By.cssSelector("[data-testid='upload-valid-avatar']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='avatar-preview']")));
        } finally {
            driver.quit();
        }
    }
}
