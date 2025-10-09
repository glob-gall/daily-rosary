import { render } from "@testing-library/react-native"
import CompleteRosaryButton from "../complete-rosary-button"

describe('CompleteRosaryButton', () => {
  it('should be able to complete the rosary', () => {

    render(
      <CompleteRosaryButton type="full"/>
    )

  })
})