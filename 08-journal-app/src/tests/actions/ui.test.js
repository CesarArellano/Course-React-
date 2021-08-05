import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Testing in ui-actions', () => {
  
  test('All actions must work', () => {
    const action = setError('Fire fire!');
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'Fire fire!'
    });

    const removeErrorAction = removeError();
    const uiStartLoadingAction = uiStartLoading();
    const uiFinishLoadingAction = uiFinishLoading();
    
    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError
    });

    expect(uiStartLoadingAction).toEqual({
      type: types.uiStartLoading
    });

    expect(uiFinishLoadingAction).toEqual({
      type: types.uiFinishLoading
    });
  })
  
})
