const{test,expect}= require('@playwright/test')

test('Dropdown Test',async({page})=>{
      
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({label:'Andhra Pradesh'})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:'Tamil Nadu'}) 
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index:3})
    
   /* const value = await page.locator('#state').textContent()
    console.log("All dropdown values:" + value)

    await expect(value.includes('Tamil Nadu')).toBeTruthy()
    await expect(value.includes('AP')).toBeFalsy() */

    //loop in playwright
    
     let state = await page.$("#state")
     let allElements = await state.$$("option")
     let ddStatus=false

     for(let i=0;i<allElements.length;i++){
        let element = allElements[i]
        let value = await element.textContent()
   
        console.log("Value from Dropdown using for loop : " + value)
        if(value.includes('Odisha')){
            ddStatus=true
            break
          }
    }
    await expect(ddStatus).toBeTruthy()
  
    await page.locator("#hobbies").selectOption(['Playing','Swimming']) 

    await page.waitForTimeout(2000)
  })