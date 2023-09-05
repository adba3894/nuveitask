# TC1:

1. Go to “https://nuvei.com”;
2. Navigate to Solutions -> Platform integrations;
3. Make sure that the “Location” field is loaded before the next step;
4. In the search field write “Commerce”;
5. In these fields select the options:
a. Partner type = eCommerce platform;
b. Industry = Digital goods;
c. Location = Canada and Great Britain.
6. Check that there are exactly 4 results displayed.
7. Click on the third result;
8. Verify that the title of the partner is “BigCommerce”.

# To run a test in background use this command:

```Shell
npx playwright test nuveiTask.spec.ts 
```

# To run a test in UI use this command:

```Shell
npx playwright test --ui nuveiTask.spec.ts 
```