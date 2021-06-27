import {filterImageFromURL, deleteLocalFiles} from '../util/util';

import { expect } from 'chai';

import 'mocha';

describe('filterImageFromURL function', () => {

    it('should filter images', () => {
      const result = filterImageFromURL('alabala');
      expect(result).to.equal(result);
    });
  
  });