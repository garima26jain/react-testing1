import React from "react"
import Counter from "../Counter"
import { fireEvent, render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(()=>{
    const component = render(<Counter/>)
    getByTestId = component.getByTestId
})

afterEach

test("Header renders with correct text",()=>{
    //const component = render(<Counter/>) //renders comp on virtual dom
    //we can destructure the getByTestId    
    //const { getByTestId} = render(<Counter/>) 
    const headerEl = getByTestId("header")   
    //const headerEl = component.getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter")
})

test("counter initially starts with text of 0", ()=>{
    
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("input contains an initial value of 1", ()=>{
    
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test("Add btn renders with + ", ()=>{
    
    const addbtn = getByTestId("add-btn")

    expect(addbtn.textContent).toBe("+")
})

test("Subtract btn renders with - ", ()=>{
    
    const subtractBtn = getByTestId("sub-btn")

    expect(subtractBtn.textContent).toBe("-")
})

test(" change val of input text works correctly  ", ()=>{
    
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    //trigger/implement some event --change the value from 1 to other num
    //to do this in testing env -- import method fireEvent method
    
    fireEvent.change(inputEl,{
        target: {
            value: "5"
        }
    })
    expect(inputEl.value).toBe("5")
})

test("clicking on plus btn adds 1 to counter", ()=>{
    
    const addbtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addbtnEl)
    expect(counterEl.textContent).toBe("1")

})

test("clicking on sub btn subtract 1 from counter", ()=>{
    
    const subtractbtnEl = getByTestId("sub-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractbtnEl)
    expect(counterEl.textContent).toBe("-1")

})

test("changing the input value then clicking on add btn adds works correctly", ()=>{
    
    const addbtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl,{
        target:{
            value: "5"
        }
    })

    fireEvent.click(addbtnEl)

    expect(counterEl.textContent).toBe("5") // here the o/p comes to be 05 bcoz of string concatenation (e.target.value -- a string)
    //hence ts is really powerful , this is kind of static testing right over here  

})

test("changing the input value then clicking on sub btn adds works correctly", ()=>{
    
    const subtractBtn = getByTestId("sub-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl,{
        target:{
            value: "5"
        }
    })

    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe("-5") // here the o/p comes to be 05 bcoz of string concatenation
    //hence ts is really powerful , this is kind of static testing right over here  

})

test("adding and then subtracting leads to correct o/p num in counter",()=>{
    
    const subtractBtn = getByTestId("sub-btn")
    const addbtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl,{
        target:{
            value: "10"
        }
    })

    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl,{
        target:{
            value: "5"
        }
    })

    fireEvent.click(addbtnEl)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe("15")
})

test("counter contains correct classname", ()=>{
    
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    const subtractBtn = getByTestId("sub-btn")
    const addbtnEl = getByTestId("add-btn")

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl,{
        target:{
            value: "50"
        }
    })

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.className).toBe("red")
})