from flask import Blueprint, jsonify, request
import click

from project.utils.map_mask_database import MapMask
from project.utils.rf_regions import rf_regions


api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/map_mask', methods=['GET'])
def get_map_mask():
    # map_mask = MapMask.get_mask()
    map_mask = rf_regions
    return jsonify(map_mask=map_mask)
