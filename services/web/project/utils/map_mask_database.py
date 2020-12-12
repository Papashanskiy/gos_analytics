from project import mongo_regions_mask


class MapMask(object):

    @classmethod
    def get_mask(cls):
        _items = mongo_regions_mask.regions_mask.find()
        items = [item for item in _items]
        return items
