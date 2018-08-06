<?php
/**
 ************************************************************************
 * Copyright [2017] [RakutenPay]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ************************************************************************
 */

namespace RakutenPay\Parsers;

use RakutenPay\Domains\Requests\Requests;

/**
 * Class Item
 * @package RakutenPay\Parsers
 */
trait Item
{
    /**
     * @param Requests $request
     * @param $properties
     * @return array
     */
    public static function getData(Requests $request, $properties)
    {
        $data = [];
        $items = $request->getItems();
        if ($request->itemLenght() > 0) {
            $count = 0;

            foreach ($items as $key => $value) {
                $count++;
                if ($items[$key]->getId() != null) {
                    $data[sprintf($properties::ITEM_ID, $count)] = $items[$key]->getId();
                }
                if ($items[$key]->getDescription() != null) {
                    $data[sprintf($properties::ITEM_DESCRIPTION, $count)] = $items[$key]->getDescription();
                }
                if ($items[$key]->getQuantity() != null) {
                    $data[sprintf($properties::ITEM_QUANTITY, $count)] = $items[$key]->getQuantity();
                }
                if ($items[$key]->getAmount() != null) {
                    $amount = \RakutenPay\Helpers\Currency::toDecimal($items[$key]->getAmount());
                    $data[sprintf($properties::ITEM_AMOUNT, $count)] = $amount;
                }
                if ($items[$key]->getWeight() != null) {
                    $data[sprintf($properties::ITEM_WEIGHT, $count)] = $items[$key]->getWeight();
                }
                if ($items[$key]->getShippingCost() != null) {
                    $data[sprintf($properties::ITEM_SHIPPING_COST, $count)] = \RakutenPay\Helpers\Currency::toDecimal(
                        $items[$key]->getShippingCost()
                    );
                }
            }
        }
        return $data;
    }
}
