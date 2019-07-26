import { newE2EPage } from '@stencil/core/testing';

describe('ae-svgtest-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-svgtest-component></ae-svgtest-component>');
    const element = await page.find('ae-svgtest-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-svgtest-component></ae-svgtest-component>');
    const component = await page.find('ae-svgtest-component');
    const element = await page.find('ae-svgtest-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'SVG');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm SVG`);

    component.setProperty('last', 'Test');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm SVG Test`);

    component.setProperty('middle', 'I don\'t have a middle name');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm SVG I don\'t have a middle name Test`);
  });
});
