package com.example.tests.auth;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

/**
 * Description: Verify blank login fields show validation errors.
 * Expected result: The UI displays the expected result indicator.
 */
class AuthLoginEmptyFieldsTest {
    @Test
    void authLoginEmptyFields() {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get(System.getProperty("baseUrl", "http://localhost:3000") + "/login");
            driver.findElement(By.cssSelector("[data-testid='login-empty-fields']")).click();
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(
                    By.cssSelector("[data-testid='validation-error']")));
        } finally {
            driver.quit();
        }
    }
}
