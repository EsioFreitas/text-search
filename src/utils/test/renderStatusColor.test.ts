import { render, screen } from '@testing-library/react';
import { renderStatusColor } from "../renderStatusColor"

describe('render status color test', () => {
  it('Should return all possible colors', () => {
    expect(renderStatusColor("done")).toBe('#4cb919');
    expect(renderStatusColor("active")).toBe('#b9af19');
    expect(renderStatusColor("")).toBe('#ccc');
  })
})
